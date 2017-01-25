// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://workflowy.com/
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

function wfmd() {
    $("div.project.task>div.name>div.content").each(function() {
        if (!$(this).text().endsWith("[md]")) {
            return;
        }
        var that = this;
        $(this).parent().parent().children(".notes").each(function() {
            var md = window.markdownit();
            var result = md.render($(this).text());
            $(this).after('<div class="wfmd">' + result + '</div>');
            var md_div = $(this).parent().children("div.wfmd");
            console.log(md_div);
            md_div.children("pre").each(function() {
                console.log($(this));
                $(this).addClass("hljs");
                $(this).children('pre code').each(function(i, e) {hljs.highlightBlock(e);});
            });
            $(this).hide();
        });
    });

    $("div.wfmd img").click(function() {
        $(this).toggleClass("max-width");
    });

    $("div.wfmd").dblclick(function() {
        $(this).hide();
        $(this).parent().children(".notes").each(function() {
            $(this).show();
        });
    });

    $("div.project.task>div.notes").dblclick(function() {
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

}

$(window).bind("hashchange", wfmd);
