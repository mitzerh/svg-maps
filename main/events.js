define([

    "require",

    "app/config",
    "app/helper"

], function(require){

    var CONFIG = require("app/config"),
        Helper = require("app/helper");

    var App = function() {

    };

    App.prototype.trigger = function(type, dom, moreInfo) {
        
        Event.trigger(dom, CONFIG.events[type], moreInfo);

    };

    App.prototype.bind = function(type, dom, callback) {

        Event.bind(dom, CONFIG.events[type], callback);

    };

    /**
     * @constructor Event
     * @private
     *
     * @description
     * Utility for binding and triggering events using jQuery
     *
     */
    var Event = (function(){

        var Event = {};

        /**
         * @function bind
         * @memberOf  Event
         * @private
         *
         * @param  {object}   widget    widget info (or jquery element)
         * @param  {[type]}   eventName event name
         * @param  {function} callback  callback to bind
         *
         */
        Event.bind = function(widget, eventName, callback) {
            var dom = false;

            if (widget && widget.jquery) {
                dom = widget;
            } else if (widget && widget.dom && widget.dom.jquery) {
                dom = widget.dom;
            }

            if (dom) {
                dom.bind(eventName, callback);
            }
        };

        /**
         * @function trigger
         * @memberOf  Event
         * @private
         *
         * @param  {object} widget widget info (or jquery element)
         * @param  {string} eventName event name
         * @param  {object} additionalData additional data to pass
         *
        */
        Event.trigger = function(widget, eventName, additionalData) {
            var dom = false;

            if (widget && widget.jquery) {
                dom = widget;
            } else if (widget && widget.target && widget.target.jquery) {
                dom = widget.target;
            }

            if (dom) {
                dom.trigger(eventName, additionalData);
            }
        };

        return Event;

    }());
    
    var APP = new App();
    return APP;

});