define([
    
    "require",
    "v.all/lodash",

    "app/config",
    "app/helper"
    
], function(require){

    var CONFIG = require("app/config"),
        Helper = require("app/helper"),
        _ = require("v.all/lodash"),
        $ = window.jQuery;

    var App = function(root, id) {
        this.root = root;
        this._widget_id = id;

        this.hoverData = {};

        this._isNotClickable = false;
        this._currentZoom = 0;

    };

    App.prototype.click = function(clicked, clickOver) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id];

        if (typeof clicked!=="function") { log("[FOXMapper] No click event callback defined."); return false; }
        
        var items = widget.SVG.coords;
        
        var set = function(item,i) {
            
            item.R.click(function(){
                if (!item._selected) {
                    if (!self._isNotClickable) {
                        item.clearSelection();
                        clicked(item);
                        item._selected = true;
                        setTimeout(function(){ item.R.toFront(); },250);
                    }
                } else {
                    // trigger if clicked over a selected function
                    if (typeof clickOver==="function") { clickOver(item); }
                }
            });
        };
        
        for (var i in items) { set(items[i],i); }
        
    };

    App.prototype.hover = function(hoverIn, hoverOut, manualHoverOut) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id];

        if (typeof hoverIn!=="function") { log("[FOXMapper] No hover event callback/s defined."); return false; }
        
        var items = widget.SVG.coords,
            timeoutObj;

        var hoverOutTrigger = function(item) {
            item._hover = false;
            if (!item._selected) { item.R.toBack(); }

            if (!manualHoverOut) {
                item.defaultHoverOut();
            }

            if (typeof hoverOut==="function") { hoverOut(item); }
        };
        
        var listenHoverOut = function(item) {
            
            var clearInt = function() {
                if (self.hoverData[item.data.id]) {
                    clearInterval(self.hoverData[item.data.id]);
                }
            };
            
            clearInt();
            
            self.hoverData[item.data.id] = setInterval(function(){
                if (self._currentHover && self._currentHover.data.id!==item.data.id) {
                    hoverOutTrigger(item);
                    clearInterval(self.hoverData[item.data.id]);
                } else if (!item._hover) {
                    hoverOutTrigger(item);
                    clearInterval(self.hoverData[item.data.id]);
                }
            },50);
        };
        
        var set = function(item,i) {
            
            item.R.mouseover(function(){
                if (!item._hover) {
                    self._currentHover = item;
                    listenHoverOut(item);
                    item._hover = true;
                    item.R.toFront();
                    item.R.paper.safari();
                    if (typeof hoverIn==="function") { hoverIn(item); }
                }
            });
            
            item.R.mouseout(function(){
                item.R.paper.safari();
                hoverOutTrigger(item);
            });
            
        };
        
        for (var i in items) { set(items[i],i); }

    };

    App.prototype.select = function(id, callbackFN) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id],
            items = widget.SVG.coords;

        if (!id) { return false; }
        if (items[id]) { callbackFN(items[id]); }

    };

    App.prototype.colorize = function(target, isDoneFN) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id];

        var items = widget.SVG.coords;

        // animate on initial load only
        // only do opacity animation if not IE 8 & below
        var animate = function(tar, val) {
            var R = tar.R, attr = R.attr();
            
            /*
            if (isIELow()) {
                R.attr(Helper.insertVals(val.attr));
            } else . . .
            */
            if (tar._onLoadAnimate && !val.onChangeAnimate) {
                R.attr(Helper.insertVals(val.attr));
            } else {
                var endOpacity = (val.attr["fill-opacity"]) ? val.attr["fill-opacity"] : 1, speed = (tar._onLoadAnimate) ? 500 : 150;
                val.attr["fill-opacity"] = 0;
                R.attr(Helper.insertVals(val.attr));
                R.animate({ "fill-opacity":endOpacity }, speed);
            }
            
            tar._onLoadAnimate = true;
        };

        if (!$.isArray(target)) {
            target = [target];
        }
        
        var len = target.length;

        for (var x = 0; x < len; x++) {
            var val = target[x];

            if (items && items[val.fipsCode] && val.attr) {

                var tar = items[val.fipsCode];
                animate(tar, val);
                tar._colorized = true;

            }
        }

        if (typeof isDoneFN === "function") { isDoneFN(); }

    };

    App.prototype.zoom = function(type) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id];
        
        var zcfg = widget.attrs.zoom || false,
            pct = (zcfg && !isNaN(zcfg.step)) ? zcfg.step : 0.15,
            maxIn = (zcfg && !isNaN(zcfg.maxIn)) ? zcfg.maxIn : 8,
            maxOut = (zcfg && !isNaN(zcfg.maxOut)) ? zcfg.maxOut : 0,
            changed = false;
            
        pct = (pct >= 1) ? (pct/100) : pct;
        
        var curr = self._currentZoom,
            view = widget.SVG._origCanvasSize,
            currView = widget.SVG.canvas._viewBox,
            cW = view[2],
            cH = view[3],
            wStep = Math.floor(cW * pct),
            hStep = Math.floor(cH * pct);

        switch (type) {
            case "in":
                
                if (Math.abs(curr - 1) <= maxIn) {
                    curr = Math.abs(curr - 1);
                    if (cW - (wStep * curr) > 0 && cH - (hStep * curr) > 0) {
                        self._currentZoom--;
                        changed = true;
                        cW = cW - (wStep * curr);
                        cH = cH - (hStep * curr);
                    }

                }

                break;

            case "out":

                if ((maxOut !== 0 && Math.abs(curr + 1) < maxOut) || (maxOut === 0 && curr < 0)) {
                    changed = true;
                    self._currentZoom++;

                    cW = cW + (wStep * self._currentZoom);
                    cH = cH + (hStep * self._currentZoom);
                }

                break;

        }
        
        if (changed) {
            widget.SVG.canvas.setViewBox(currView[0], currView[1], cW, cH, currView[4]);
        }

    };

    App.prototype.panning = function(dir) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id],
            pct = 0.05,
            changed = false;

        var currZoom = self._currentZoom,
            currView = widget.SVG.canvas._viewBox,
            cX = currView[0],
            cY = currView[1],
            step = Math.floor(currView[3] * pct);

        switch (dir) {

            case "left":
                cX = cX - step;
                changed = true;

                break;

            case "right":
                cX = cX + step;
                changed = true;

                break;

            case "up":
                cY = cY - step;
                changed = true;
                break;

            case "down":
                cY = cY + step;
                changed = true;
                break;

        }

        if (changed && currZoom !== 0) {
            self.setViewBox(cX, cY, currView[2], currView[3], currView[4]);
        }

    };

    App.prototype.dragging = function() {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id];

        if (widget.attrs._draggaingOn) { return false; }
        widget.attrs._draggaingOn = true;

        var target = widget.target,
            timeoutObj = false,
            evt = false,
            x = false,
            y = false;

        var dragMode = function() {
            
            target.mousemove(function(obj){

                var elm = $(this);
                
                if (evt && self._currentZoom !== 0) {
                    
                    elm.css("cursor","move");
                    
                    x = (!x) ? obj.pageX : x;
                    y = (!y) ? obj.pageY : y;
                    
                    if (obj.pageX > x) {
                        self.panning("left");
                    } else if (obj.pageX < x) {
                        self.panning("right");
                    }
                    
                    if (obj.pageY > y) {
                        self.panning("up");
                    } else if (obj.pageY < y) {
                        self.panning("down");
                    }
                    
                    x = obj.pageX;
                    y = obj.pageY;

                } else {

                    elm.css("cursor","");

                }

            });

        };
        
        target.bind("mousedown",function(){
            clearTimeout(timeoutObj);
            
            timeoutObj = setTimeout(function(){
                evt = true;
                dragMode();
            },10);
            
        });

        target.bind("mouseup",function(){

            evt = false;
            dragMode();
            
        });
        
        target.hover(function(){
            // do nothing
        },function(){

            evt = false;
            dragMode("off");

        });

    };

    App.prototype.setViewBox = function(x, y, w, h, fit) {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id];
        
        widget.SVG.canvas.setViewBox(x, y, w, h, fit);
    };

    App.prototype.resetView = function() {
        var self = this,
            root = this.root,
            vars = root.__vars,
            widget = vars._widgets[self._widget_id],
            origCanvas = widget.SVG._origCanvasSize;
        
        // reset zoom
        self._currentZoom = 0;
        widget.SVG.canvas.setViewBox(origCanvas[0], origCanvas[1], origCanvas[2], origCanvas[3], origCanvas[4]);
    };

    App.prototype.disableClick = function(event) {
        var self = this;
        self._isNotClickable = true;
    };


    App.prototype.enableClick = function() {
        var self = this;
        self._isNotClickable = false;
    };

    return App;

});