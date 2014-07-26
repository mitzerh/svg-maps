(function(){

    var PROD = true; // true on prod

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

    if (FOX_Maps._APP_INITIALIZED) { return false; }
    FOX_Maps._APP_INITIALIZED = true;

    /**
     * @description
     * Main require config
     *
     */
    var MAPPER_REQUIRE = requirejs.config((function(){

        var STATIC_PATH = (window.location.protocol) + "//" + ((!PROD) ? "qa." : "") + "global.fncstatic.com";

        var APP_PATH = STATIC_PATH + "/static/v/all/js/apps/map";

        var config = {

            baseUrl: APP_PATH + "/",

            paths: {
                "app": APP_PATH + "/main",
                "lib": APP_PATH + "/lib",
                "maps": APP_PATH + "/maps",
                "v.all": STATIC_PATH + "/static/v/all/js"
            },

            shim: {
                "lib/raphael": {
                    exports: "Raphael"
                },
                "v.all/lodash": {
                    exports: "_"
                }
            }

        };

        return config;

    }()));

    MAPPER_REQUIRE((function(){

        var deps = ["require"];

        var appDeps;

        if (PROD) {
            appDeps = ["lib/embed"];
        } else {
            appDeps = ["app/config", "app/events", "app/mapper"];
        }

        deps = deps.concat(appDeps);

        // plugins
        var pluginDeps = [];

        // add Rapahel
        if (!window.Raphael) {
            pluginDeps.push("lib/raphael");
        }

        // add lodash
        if (!window._) {
            pluginDeps.push("v.all/lodash");
        }

        var FOX_Plugins = window.FOX_Plugins || {};

        // add event message handler
        if (!FOX_Plugins["EventMessageHandler"]) {
            pluginDeps.push("v.all/plugins/EventMessageHandler");
        }

        // add load attempt
        if (!FOX_Plugins["LoadAttempt"]) {
            pluginDeps.push("v.all/plugins/LoadAttempt");
        }

        deps = deps.concat(pluginDeps);
        
        return deps;

    }()), function(require){

        require(["require", "app/mapper", "v.all/lodash", "lib/raphael"], function(){

            var Mapper = require("app/mapper"),
                FOX_Maps = window.FOX_Maps;

            var callstack = FOX_Maps.__vars._callstack;

            for (var i = 0; i < callstack.length; i++) {
                var item = callstack[i];
                Mapper.embed(item.elm, item.config);
            }

            window.FOX_Maps.API = Mapper;

        });

    });

}());

