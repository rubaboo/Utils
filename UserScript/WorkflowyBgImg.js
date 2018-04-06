// ==UserScript==
// @name         WorkflowyBgImg
// @namespace    http://wizmann.tk
// @version      0.1
// @description  try to take over the world!
// @author       Wizmann
// @match        https://workflowy.com/
// @grant        GM_xmlhttpRequest
// @connect      api.ioliu.cn
// @connect      windows.microsoft.com
// ==/UserScript==

// There are three types of the background image
// 1. BING_TODAY (Default) - Today's Bing wallpaper
// 2. BING_RAND - Random Bing wallpaper
// 3. CUSTOM - Custom background img list

var TYPE = "BING_RAND";

// special thanks to Microsoft :)
var CUSTOM_URL_LIST = [
    'http://res2.windows.microsoft.com/resbox/en/windows/main/fc35f5b1-8013-413c-b99e-ed5d45ca53b3_4.jpg',
    'http://res1.windows.microsoft.com/resbox/en/windows/main/0d3c7cef-fd76-4e51-ba6c-d8a072d2319d_4.jpg',
    'http://res2.windows.microsoft.com/resbox/en/windows/main/fdbe38f2-e035-43be-85e8-5fd346fb9032_4.jpg',
    'http://res2.windows.microsoft.com/resbox/en/windows/main/681cfc55-cf11-42dd-9178-ae0e2932b573_4.jpg',
];

// and thanks for ioliu.cn for the bing wallpaper api
var BING_TODAY_API = "https://api.ioliu.cn/bing/";
var BING_RANDOM_API = "https://bing.ioliu.cn/v1/rand";



$(window).load(function() {
    $("div#getMoreSpaceButtonTopLeft").html("<img id=\"bgprocessing\" src=\"https://workflowy.com/media/i/ajax-loader.gif\" style=\"display:none; height:20px\" />");
    $("div#pageContainer").dblclick(function(e) {
        if (e.target != this) {
            e.target.dblclick();
            return;
        }

        var next_url = BING_RANDOM_API;
        if (TYPE == "CUSTOM") {
            next_url = CUSTOM_URL_LIST[Math.floor(Math.random() * CUSTOM_URL_LIST.length)];
        } else if (TYPE == "BING_RAND") {
            next_url = BING_RANDOM_API + '?_=' + new Date().getTime();
        }

        console.log("dbclick");
        console.log(next_url);

        var image = new Image();
        $("img#bgprocessing").css("display", "inline");
        image.onload = function () {
            $("img#bgprocessing").css("display", "none");
            $("body").css('background-image', 'url(' + next_url + ')');
        };
        image.src = next_url;
    });

    $("div#pageContainer").dblclick();
});
