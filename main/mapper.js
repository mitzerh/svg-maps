define([

    "require",
    "v.all/lodash",
    "lib/raphael",

    "app/config",
    "app/events",
    "app/helper",
    "app/controls"

], function(require){

    var CONFIG = require("app/config"),
        Helper = require("app/helper"),
        Events = require("app/events"),
        Controls = require("app/controls"),
        _ = require("v.all/lodash"),
        Raphael = require("lib/raphael"),
        $ = window.jQuery;

    var App = function() {

        this.Renderer = new Renderer(this);

        this.__vars = {};
        var vars = this.__vars;

        vars._widgets = {};

        this._APP_READY = true;

    };

    App.prototype.onReady = function(id, callback) {
        var self = this,
            vars = self.__vars,
            widget = self.getWidgetById(id);

        if (widget._ready) {

            if ($.isArray(widget._readyStack) && widget._readyStack.length > 0) {

                for (var x = 0; x < widget._readyStack.length; x++) {
                    widget._readyStack[x](id);
                }

                widget._readyStack = null;

            }

            callback(id);

        } else {

            // stack until ready
            if (!widget._readyStack) { widget._readyStack = []; }
            widget._readyStack.push(callback);

        }

    };

    App.prototype.validateWidget = function(attrs) {
        var self = this,
            ret = false;
        
        if (attrs.widgetType && attrs.widgetWidth && attrs.widgetHeight) {
            ret = true;
        }

        return ret;

    };

    App.prototype.generateWidgetId = function(attrs) {
        var self = this,
            vars = self.__vars,
            type = attrs.widgetType,
            cntr = 1;

        var genId = function(x) {
            var ret = ["fox-maps", type, x].join("-");
            return ret;
        };

        var id = genId(cntr);

        if (vars._widgets[id]) {

            while (vars._widgets[id]) {
                cntr++;
                id = genId(cntr);
            }

        }

        return id;

    };

    App.prototype.saveWidget = function(target, attrs) {
        var self = this,
            vars = self.__vars,
            id = attrs["widgetUID"];

        vars._widgets[id] = { target: target, attrs: attrs };

        // render uid
        target.attr({
            "id": target.attr("id") || id,
            "data-widget-uid": id
        });

        // event binding
        
        // on map render, set to ready
        Events.bind("OnMapRender", target, function(event, info){

            // ready state
            vars._widgets[id]._ready = true;
            
        });

    };

    App.prototype.getWidgetById = function(id) {
        var self = this,
            vars = self.__vars;

        return (id === "all") ? vars._widgets : (vars._widgets[id] || false);

    };

    App.prototype.render = function(id) {
        var self = this,
            vars = self.__vars;

        if (!vars._widgets[id]) { return false; }

        // get map data
        var widget = vars._widgets[id],
            target = widget.target,
            attrs = widget.attrs,
            feedPath = Helper.getMapFeed(attrs.widgetType);
        
        require([feedPath], function(data){

            // TODO: event - on feed load
            
            // set css width/height
            target.css({
                width: attrs["widgetWidth"],
                height: attrs["widgetHeight"]
            });
            
            // set map data
            var mapData = {
                path: feedPath,
                data: data
            };

            vars._widgets[id].map = mapData;

            self.Renderer.set(id);

        });

    };

    App.prototype.setBindings = function(id, obj, item, attr) {
        var self = this,
            vars = self.__vars,
            widget = vars._widgets[id],
            coords = widget.SVG.coords;
        
        // original attr
        obj.setOrigAttr = function(override) {
            var attrs = (function(){
                var i, obj = {};
                for (i in attr) {
                    if (i !== "path") { obj[i] = attr[i]; }
                }
                return obj;
            }());
            
            if (this._colorized && !override) {
                try { delete attrs.fill; } catch(err) { }
            }
            
            this.R.attr(attrs);
        };
        
        // set attribute
        obj.setAttr = function(val,override) {
            this._selectionAttr = val;
            var orig = this.R.attr(), attrs = Helper.insertVals(val);
            
            // if colorized & no override, do not fill
            if (this._colorized && !override) {
                try {
                    if (attrs.fill) { delete attrs.fill; }
                } catch(err) { }
            }
            
            this.R.attr(attrs);
        };

        // selection attr
        obj.setSelectionAttr = function() {
            if (this._selected && this._selectionAttr) {
                var orig = this.R.attr();
                this.R.attr(Helper.insertVals(this._selectionAttr));
            } else {
                this.setOrigAttr();
            }
        };
        
        // center bound box;
        obj.centerBBox = function() {

            var centerBox = function(bbox,cpX,cpY) {
                var w = bbox.width,
                    h = bbox.height,
                    x = bbox.x,
                    y = bbox.y;
                
                cpX = cpX || 0;
                cpY = cpY || 0;
                
                w = Math.floor(w / 2) - cpX;
                h = Math.floor(h / 2) - cpY;
                
                return [(x + w), (y + h)];
            };

            return centerBox(this.R.getBBox());
        };
        
        // is clicked/selected
        obj.isSelected = function() {
            return (this._selected) ? true : false;
        };
        
        // is colored
        obj.isColorized = function() {
            return (this._colorized) ? true : false;
        };

        // is hover in
        obj.isHover = function() {
            return (this._hover) ? true : false;
        };
        
        // clear selected
        obj.clearSelection = function() {
            for (var i in coords) {
                coords[i]._selected = false; // clear flag
                coords[i].setOrigAttr();
            }
        };

        // clear for current item only
        obj.clearThisSelection = function() {
            this._selected = false; // clear flag
            this.setOrigAttr();
        };
        
        // check if hovering
        obj.hasHover = function() {
            for (var i in coords) {
                if (coords[i]._hover) { return true; }
            }
            return false;
        };

        // hover out default
        var timeoutObj;

        obj.defaultHoverOut = function() {
            var thisItem = this;

            if (thisItem.isSelected()) {
                thisItem.setSelectionAttr();
            } else {
                thisItem.setOrigAttr();
            }
            
            clearTimeout(timeoutObj);
            timeoutObj = setTimeout(function(){
                if (!thisItem.isHover() && !thisItem.isSelected()) {
                    // clear selection
                    thisItem.clearThisSelection();
                }
            },150);

        };

        return obj;

    };

    var Renderer = (function(){

        var Renderer = function(root) {
            this.root = root;

        };

        Renderer.prototype.set = function(id) {
            var self = this,
                root = self.root,
                vars = root.__vars;

            var widget = vars._widgets[id],
                target = widget.target,
                attrs = widget.attrs;

            // Create Raphael canvas
            var RCanvas = (function(){
                return Raphael(target.attr("id"), attrs["widgetWidth"], attrs["widgetHeight"]);
            }());


            // IE Fix
            // this.IEFix();
            
            RCanvas.renderfix();
            
            self.SVG(RCanvas, id, function(){

                // save canvas
                vars._widgets[id].RCanvas = RCanvas;
                vars._widgets[id].Controls = new Controls(root, id);

                // TODO: event map rendered callback here
                Events.trigger("OnMapRender", widget.target, { id: id, widget: vars._widgets[id] });

            });

            /*
            // svg plot
            self.SVG(RCanvas,data,function(){
               
               if (typeof fn==="function") { fn(); }
               
               // holder listener
                holder.hover(function(){
                    self._hoverInCanvas = true;
                },function(){
                    self._hoverInCanvas = false;
                });
            });
            */

        };

        Renderer.prototype.SVG = function(canvas, id, callback) {
            var self = this,
                root = self.root,
                vars = root.__vars,
                widget = vars._widgets[id];

            var target = widget.target,
                attrs = widget.attrs,
                data = widget.map.data,
                items = data.state || data.county || data.district;

            // sort shortest to longest coordinate string
            items.sort(function(a,b){
                var valA = a.coords.length, valB = b.coords.length;
                return (valA < valB) ? -1 : 1;
            });

            // attributes
            var svgAttrs = _.extend(CONFIG.SVG_Defaults.attr, attrs["svgAttrs"] || {});

            // set view box
            //var viewBox = (Helper.useFixedView()) ? (data.viewBoxFixed) ? data.viewBoxFixed : CONFIG.SVG_Defaults.box.viewBoxFixed : (data.viewBox) ? data.viewBox : CONFIG.SVG_Defaults.box.viewBox;
            var viewBox = data.viewBoxFixed || data.viewBox;

            if (typeof viewBox[4] === "boolean") {
                canvas.setViewBox(viewBox[0],viewBox[1],viewBox[2],viewBox[3], viewBox[4]);
            } else {
                canvas.setViewBox(viewBox[0],viewBox[1],viewBox[2],viewBox[3]);
            }

            // set storage
            if (!vars._widgets[id].SVG) { vars._widgets[id].SVG = {}; }
            vars._widgets[id].SVG.canvas = canvas;

            // set up path render
            
            var hasDrawn = true;

            var set = function(item) {
                
                // set path
                var poly = canvas.path(item.coords);
                poly.attr(svgAttrs);
                poly.id = item.fipsCode;

                var pathData = { data: item, R: poly };
                if (!vars._widgets[id].SVG.coords) { vars._widgets[id].SVG.coords = {}; }

                pathData = root.setBindings(id, pathData, item, svgAttrs);
                vars._widgets[id].SVG.coords[item.fipsCode] = pathData;

                hasDrawn = true;

            };

            var done = function() {

                vars._widgets[id].SVG._origCanvasSize = viewBox;

                if (typeof callback === "function") { callback(); }

            };

            var len = items.length,
                cntr = 0,
                timeoutObj = false;

            var trigger = function() {

                if (cntr < len && hasDrawn) {

                    hasDrawn = false;
                    set(items[cntr]);
                    cntr++;
                    trigger();

                } else if (cntr === len) {

                    clearTimeout(timeoutObj);
                    done();

                } else {

                    timeoutObj = setTimeout(function(){
                        trigger();
                    }, 10);
    
                }

            };

            trigger();

        };

        return Renderer;

    }());

    // logger - too many logs, need to switch on/off
    var log = function() {
        var loggerON = true;
        if (loggerON && window.console) {
            try {
                return console.log.apply(console, arguments);
            } catch(err) {
                console.log(arguments);
            }
        }
    };

    var APP = new App();



    /*** API ***/
    var API = (function(){

        var API = function() {

        };

        API.prototype.embed = function(elements, config) {
            var self = this;

            config = config || {};
            
            elements.each(function(){
                var target = $(this),
                    attrs = Helper.getDataAttr(target.get(0));

                if (APP.validateWidget(attrs)) {

                    var id = APP.generateWidgetId(attrs);
                    attrs["widgetUID"] = id;
                    attrs.config = config;

                    APP.saveWidget(target, attrs);
                    APP.render(id);

                }

            });

        };

        API.prototype.controls = function(type, config) {

            if (APP.Controls[type]) {
                APP.Controls[type](config);
            }

        };

        API.prototype.getWidgetById = function(id) {
            var self = this;

            return APP.getWidgetById(id);

        };

        return (new API());

    }());

    return API;

});