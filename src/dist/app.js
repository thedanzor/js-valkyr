!function e(r,t,a){function n(i,d){if(!t[i]){if(!r[i]){var c="function"==typeof require&&require;if(!d&&c)return c(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var p=t[i]={exports:{}};r[i][0].call(p.exports,function(e){var t=r[i][1][e];return n(t?t:e)},p,p.exports,e,r,t,a)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<a.length;i++)n(a[i]);return n}({1:[function(e,r,t){var a=e("./utils/dashboard.js"),n=e("./demo/application/app"),o=document.querySelector(".application");o&&n(o,function(){a.check(o)})},{"./demo/application/app":2,"./utils/dashboard.js":3}],2:[function(e,r,t){var a=function(e){for(var r=0;r<12;r++){var t=document.createElement("div");t.setAttribute("dashboard-child","content_element_"+r),t.className="content_wrapper",e.appendChild(t)}},n=function(e){for(var r=0;r<4;r++){var t=document.createElement("div");t.setAttribute("dashboard-child","menu_element_"+r),t.className="content_wrapper",e.appendChild(t)}},o=function(e){var r=document.createElement("div"),t=document.createElement("div");r.className="app_sidebar",r.setAttribute("dashboard-wrapper","sidebar"),t.className="app_wrapper",t.setAttribute("dashboard-wrapper","wrapper"),e.appendChild(r),e.appendChild(t),n(r),a(t)};r.exports=function(e,r){o(e),r()}},{}],3:[function(e,r,t){var a={},n=function(e){var r=e.querySelectorAll("[dashboard-wrapper]");if(r&&r.length)for(var t=0;t<r.length;t++){var n=r[t].querySelectorAll("[dashboard-child]"),o=r[t].getAttribute("dashboard-wrapper");if(a[o]={},n&&n.length){a[o].element=n[i],a[o].state="enabled",a[o].children={};for(var i=0;i<n.length;i++){var d=n[i].getAttribute("dashboard-child");a[o].children[d]={state:"enabled",element:n[i]}}}}return console.log(a),a},o=function(){};r.exports={check:n,manager:o}},{}]},{},[1]);
