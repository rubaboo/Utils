// ==UserScript==
// @name         WorkflowyPlus
// @namespace    http://wizmann.tk
// @version      0.1
// @author       Wizmann
// @match        https://workflowy.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function do_parseImg() {
    console.log("do_parseImg");
    $(this).nextAll(".content-img").remove();
    var lines = $(this).text().split("\n");
    var img_re = /^\!\[(?<property>.*?)(?:,(?<ratio>\d+))?\]\((?<url>.+)\)$/;

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        var img = line.match(img_re);
        if (img === null) {
            continue;
        }
        var property = img.groups.property;
        var img_url = img.groups.url

        // console.log(property, img_url);

        if (property === "iframe") {
            $(this).after('<div class="content-img"><iframe width="100%" height="512" src="' + img_url + '" frameborder="0" allowfullscreen=""></iframe></div>');
        } else if (property === "audio") {
            $(this).after('<div class="content-img"><audio src="' + img_url + '" controls="controls"></audio></div>');
        } else {
            console.log(img);
            if (img.groups.ratio != undefined) {
                $(this).after('<div class="content-img"><img width="' + img.groups.ratio + '%" ' + 'src="' + img_url + '"/></div>');
            } else {
                $(this).after('<div class="content-img"><img src="' + img_url + '"/></div>');
            }
        }
    }
}

function parseImg() {
    console.log("parseImg");
    // console.log($("div.notes div.content"));
    // $("div.notes div.content").keyup(do_parseImg);
    // $("div.notes div.content").click(do_parseImg);
    $("div.notes div.content").each(do_parseImg);
};

$(window).bind("load hashchange", parseImg);
window.addEventListener('popstate', parseImg);

window.WFEventListener = event => {
  switch (event) {
    case 'documentReady':
    case 'expand':    // via click on + & Ctrl+Space on child only. NOT SUPPORTED: Ctrl+Down, Ctrl+Space on parent & menu
    case 'collapse':    // via click on - & Ctrl+Space on child only. NOT SUPPORTED: Ctrl+Up, Ctrl+Space on parent & menu
          parseImg(); break;
    case 'operation--move':    // moving any bullet, via mouse or KBS, including indent, outdent
    case 'operation--edit':    // automatic save after any editing text operations. Usually fires within 1s of last keystroke
          console.log(event);
          var node = WF.focusedItem().getElement();
          console.log($(node).find("div.notes div.content"));
          $(node).find("div.notes div.content").each(do_parseImg);
          break;
  }
};

var pushState = history.pushState;
history.pushState = function () {
    pushState.apply(history, arguments);
    parseImg();
};
