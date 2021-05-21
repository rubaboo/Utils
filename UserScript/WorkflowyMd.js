// ==UserScript==
// @name         WorkflowyMd
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://workflowy.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/markdown-it/8.2.2/markdown-it.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js
// @resource     hljs_css https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/monokai-sublime.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==
/* jshint -W097 */
(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js";
    document.body.appendChild( scriptElement );
})();
GM_addStyle ( GM_getResourceText ("hljs_css") );

function render(content) {
    console.log("render");
    if (!$(content).text().endsWith("[md]")) {
        $(content).parent().parent().children(".wfmdraw.notes").each(function() {
            $(this).unbind("dblclick");
            $(this).show();
        });
        $(content).parent().parent().children(".wfmd").each(function() {
            $(this).remove();
        });
        return;
    }

    $(content).parent().parent().children(".notes").each(function() {
        $(this).addClass("wfmdraw");
        var md = window.markdownit();
        var result = md.render($(this).text());
        $(this).parent().children(".wfmd").each(function() {
            $(this).remove();
        });
        $(this).after('<div class="wfmd">' + result + '</div>');
        var md_div = $(this).parent().children("div.wfmd");

        md_div.children("pre").each(function() {
            $(this).addClass("hljs");
            $(this).children('pre code').each(function(i, e) {hljs.highlightBlock(e);});
        });
        md_div.dblclick(function(e) {
            if (e.target.tagName == "IMG") {
                $(e.target).toggleClass("max-width");
            } else {
                $(this).hide();
                $(this).parent().children(".notes").each(function() {
                    $(this).show();
                });
            }
        });
        $(this).dblclick(function() {
            var md = window.markdownit();
            var result = md.render($(this).text());
            $(this).parent().children(".wfmd").each(function() {
                $(this).html(result);
                $(this).children("pre").each(function() {
                    console.log($(this));
                    $(this).addClass("hljs");
                    $(this).children('pre code').each(function(i, e) {hljs.highlightBlock(e);});
                });
                $(this).show();
            });
            $(this).hide();
        });
        $(this).hide();
    });
}

function wfmd() {
    console.log("wfmd");
    $("div.project>div.name>div.content").each(function() {
        render($(this));
    });

    $("div.project>div.name>div.content").keyup(function() {
        render($(this));
    });
}

$(window).bind("load hashchange", wfmd);

var pushState = history.pushState;
history.pushState = function () {
    wfmd();
};

function onStart() {
    if (!$("div#loadingScreen").is(":visible")) {
        wfmd();
        return;
    }
    console.log("still loading, wait for another +1s");
    setTimeout(onStart, 1000);
}

onStart();
