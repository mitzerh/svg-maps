define([

    "require",
    "app/config"

], function(require){

    var CONFIG = require("app/config");

    var App = function() {

    };

    /**
     * @function getDataAttr
     * @private
     *
     * @description
     * Get data-* attributes from dom element
     *
     * @param  {object} dom dom element
     * @return {object} dom data
     *
     */
    App.prototype.getDataAttr = function(dom) {
        var self = this,
            data = {},
            attr = dom.attributes;

        // get data attributes
        for (x = 0; x < attr.length; x++) {
            var node = attr[x],
                name = node.nodeName,
                val = node.nodeValue;

            if (name.indexOf("data-") === 0) {
                // format data names
                var id = self.formatDataAttr(name);
                data[id] = val;
            }

        }

        return data;

    };

    /**
     * @function formatDataArr
     * @private
     *
     * @description
     * Format raw data-* attribute
     * @param  {string} attr attribute
     * @return {string}
     */
    App.prototype.formatDataAttr = function(attr) {

        var x, ret = [],
            id = attr.replace(/^data\-/gi, ""),
            sp = id.split("-");

        for (x = 0; x < sp.length; x++) {
            var s = (x === 0) ? sp[x] : sp[x].charAt(0).toUpperCase() + sp[x].slice(1);
            ret.push(s);
        }

        ret = (ret.length > 0) ? ret.join("") : attr;

        return ret;

    };

    App.prototype.getMapFeed = function(type) {

        type = type.toLowerCase();
        type = type.replace(/[^a-z]/gi, "-");

        // "maps" as the correct require path
        var ret = "maps/" + type;
        return ret;

    };

    // basic insert vals for paths
    App.prototype.insertVals = function(val) {
        var obj = {};
        for (var i in val) {
            if (i !== "path") {
                obj[i] = val[i];
            }
        }
        return obj;
    };

    // for use in iphone/ipad/ipod and safari - stretch issue
    App.prototype.useFixedView = function() {
        var ret = false, ua = navigator.userAgent;
        ret = (/iPad/i.test(ua) || /iPhone/i.test(ua) || /iPod/i.test(ua) || (/Safari/i.test(ua) && !/Chrome/i.test(ua))) ? true : false;
        return ret;
    };

    // logger
    App.prototype.log = function() {
        var loggerON = true;
        if (loggerON && window.console) {
            try {
                return console.log.apply(console, arguments);
            } catch(err) {
                console.log(arguments);
            }
        }
    };

    return (new App());

});