module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([2],{240:function(e,t,n){e.exports=n(241)},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(28);var o=n.n(r);var u=n(9);var a=n.n(u);var i=n(111);var c=n.n(i);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function a(e,t){try{var n=u[e](t);var a=n.value}catch(e){o(e);return}n.done?r(a):Promise.resolve(a).then(i,c)}function i(e){a("next",e)}function c(e){a("throw",e)}i()})}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function y(e,t,n){t&&s(e.prototype,t);n&&s(e,n);return e}function b(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){v(t,e);function t(){p(this,t);return b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}y(t,[{key:"render",value:function e(){return a.a.createElement("div",null,a.a.createElement("h1",null,"The main page of ",this.props.appName),a.a.createElement("p",null,"Go to ",a.a.createElement(c.a,{href:"/auth"},a.a.createElement("a",null,"Auth"))))}}],[{key:"getInitialProps",value:function(){var e=l(o.a.mark(function e(t){var n;return o.a.wrap(function e(r){while(1)switch(r.prev=r.next){case 0:console.log(t);n=new Promise(function(e,t){setTimeout(function(){e({appName:"Super App"})},1e3)});return r.abrupt("return",n);case 3:case"end":return r.stop()}},e,this)}));return function t(n){return e.apply(this,arguments)}}()}]);return t}(u["Component"]);t["default"]=h}},[240]);return{page:e.default}});