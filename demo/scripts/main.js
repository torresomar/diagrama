(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/kryptophsky/Documents/Development/Programming/diagrama/demo/scripts/application.js":[function(require,module,exports){
var Diagrama = require('./../../lib/index');

Diagrama.test();

},{"./../../lib/index":"/home/kryptophsky/Documents/Development/Programming/diagrama/lib/index.js"}],"/home/kryptophsky/Documents/Development/Programming/diagrama/lib/index.js":[function(require,module,exports){
var test = function() {
    console.log('Module');
};

module.exports = {
    test: test
};

},{}]},{},["/home/kryptophsky/Documents/Development/Programming/diagrama/demo/scripts/application.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9rcnlwdG9waHNreS9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvUHJvZ3JhbW1pbmcvZGlhZ3JhbWEvZGVtby9zY3JpcHRzL2FwcGxpY2F0aW9uLmpzIiwiL2hvbWUva3J5cHRvcGhza3kvRG9jdW1lbnRzL0RldmVsb3BtZW50L1Byb2dyYW1taW5nL2RpYWdyYW1hL2xpYi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUU1QyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7OztBQ0ZoQixJQUFJLElBQUksR0FBRyxXQUFXO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDYixJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIERpYWdyYW1hID0gcmVxdWlyZSgnLi8uLi8uLi9saWIvaW5kZXgnKTtcblxuRGlhZ3JhbWEudGVzdCgpO1xuIiwidmFyIHRlc3QgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kdWxlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0ZXN0OiB0ZXN0XG59O1xuIl19
