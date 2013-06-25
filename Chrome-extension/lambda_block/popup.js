$(document).ready(function() {
    var is_start = null;
    chrome.storage.local.get("rrblock_running", function(data) {
        is_start = data.rrblock_running;
        console.log(is_start=="false");
        console.log(!is_start);
        console.log(typeof is_start == "undefined");

        if(is_start == "false" || !is_start || typeof is_start == "undefined") {
            console.log("false: "+ is_start);
            chrome.storage.local.set({"rrblock_running": "false"})
            $("#is_running").addClass("toggle-off");
        }
    });

    $(".toggle-radio").click(function() {
        //chrome.storage.local.set({"rrblock_running": "true"})
        chrome.storage.local.get("rrblock_running", function(data) {
            console.log(data.rrblock_running);
        });
        var attr = $("#is_running").attr("class").split(/\s+/);
        if(attr.indexOf("toggle-off")!=-1) {
            chrome.storage.local.set({"rrblock_running": "true"})
            console.log("set true");
        }
        else {
            chrome.storage.local.set({"rrblock_running": "false"})
            console.log("set false");
        }
        chrome.storage.local.get("rrblock_running", function(data) {
            console.log(data.rrblock_running);
        });
    });
});

