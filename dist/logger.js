!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("loglevel")):"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.lib=t(require("loglevel")):(e.lib=e.lib||{},e.lib.logger=t(e[void 0]))}(this,(function(e){return function(){"use strict";var t={740:function(t){t.exports=e}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var u=o[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){r.r(n),r.d(n,{pipelog:function(){return o}});var e=r(740);const t=r.n(e)().getLogger("default");t.setLevel("production"===process.env.NODE_ENV?"WARN":"DEBUG");const o=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return e=>(t.debug(...o,e),e)};n.default=t}(),n}()}));