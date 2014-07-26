define([
    "require"
], function(){

    var $ = window.jQuery;

    var CONFIG = {};

    CONFIG.qa = false;
    
    CONFIG.staticDomain = "global.fncstatic.com";

    // on fncstatic:
    CONFIG.appPath = window.location.protocol + "//" + CONFIG.staticDomain + "/static/v/all/js/apps/map";

    CONFIG.frameLocation = CONFIG.appPath + "/frame.html";

    CONFIG.dataLocation = CONFIG.appPath + "/maps/${map}.js";

    CONFIG.SVG_Defaults = {};

    CONFIG.SVG_Defaults.attr = {
        "fill": "#fff",
        "fill-opacity": 1,
        "stroke": "#ccc",
        "stroke-width": 1,
        "opacity": 1,
        "stroke-linejoin": "round",
        "cursor": "pointer"
    };

    CONFIG.SVG_Defaults.box = {
        viewBox: [-50,120,800,350],
        viewBoxFixed: [-50,40,800,350,false]
    };

    CONFIG.events = {

        "OnMapRender": "FOX.Map.Rendered"

    };

    return CONFIG;

});
