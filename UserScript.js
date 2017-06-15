// ==UserScript==
// @name         clean new tab [Chrome Only]
// @namespace    CleanNewTab
// @version      0.1
// @description  Remove the most visited list, when you create a new tab in Chrome.
// @author       mittya
// @match        https://www.google.com/_/chrome/newtab*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  GM_addStyle('body{min-height:400px !important;} #most-visited{display:none !important;}');
})();
