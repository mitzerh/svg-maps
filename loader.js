(function($){

    var JS = [
        [
            "//global.fncstatic.com/static/v/all/js/require.js",
            function(){ return (window.requirejs) ? true : false; }
        ],
        [
            "//global.fncstatic.com/static/v/all/js/apps/map/main/base.js",
            function(){ return (window.FOX_Maps && window.FOX_Maps._APP_READY) ? true : false; }
        ]
    ];

    var CSS = [

    ];

    var CSSLoaded = false;

    window.FOX_Maps = window.FOX_Maps || (function(){

        var App = function() {

            this.__vars = {};
            var v = this.__vars;

            v._ready = false;
            v._callstack = [];

            this.API = new API(this);

        };

        var API = (function(){

            var API = function(root) {
                this.root = root;

            };

            API.prototype.embed = function(elm, config) {
                var self = this,
                    root = self.root,
                    vars = root.__vars;

                vars._callstack.push({ elm: elm, config: config });
            };

            return API;

        }());

        return (new App());

    }());

    var Loader = function() {

    };

    Loader.prototype.init = function(callback) {
        var self = this;

        var timeout = false;

        if (!CSSLoaded) {
            CSSLoaded = true;
            self.loadCSS();
        }

        var isReady = function() {
            var ret = true;

            for (var i = 0, len = JS.length; i < len; i++) {
                if (!JS[i][1]()) {
                    self.loadScript(JS[i][0]);
                    ret = false;
                    break;
                }
            }

            if (!ret) {
                clearTimeout(timeout);
                timeout = setTimeout(function(){
                    isReady();
                }, 50);
            } else {
                if (typeof callback() === "function") { callback(); }
            }
        };

        isReady();

    };

    // script loader
    Loader.prototype.loadScript = function(src) {
        src = window.location.protocol + src;

        if ($("script[src*='"+src+"']").size() === 0) {
            var s = document.createElement("script");
            s.src = src;
            s.async = true;
            (document.getElementsByTagName("head") || document.getElementsByTagName("body"))[0].appendChild(s);
        }

    };

    // css loader
    Loader.prototype.loadCSS = function() {

        var trigger = function(url) {
            url = window.location.protocol + url;

            if (document.createStyleSheet) {

                document.createStyleSheet(url);

            } else {

                var l = document.createElement("link");
                l.rel = "stylesheet";
                l.type = "text/css";
                l.href = url;
                (document.getElementsByTagName("head") || document.getElementsByTagName("body"))[0].appendChild(l);

            }

        };

        for (var i = 0; i < CSS.length; i++) {
            trigger(CSS[i]);
        }

    };

    var APP = new Loader();
    APP.init();
    

}(jQuery));