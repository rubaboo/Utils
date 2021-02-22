// ==UserScript==
// @name         CF Hide Problem Tags
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://codeforces.com/contest/*/problem/*
// @grant        none
// ==/UserScript==

(function() {
    $('#sidebar div.caption.titled:contains("Problem tags")').parent().hide();
})();
