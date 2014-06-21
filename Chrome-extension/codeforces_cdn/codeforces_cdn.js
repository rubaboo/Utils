chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details.url);
        if (details.url.match("http://worker.codeforces.ru")) {
            var url = details.url.replace("http://worker.codeforces.ru", "http://codeforce-cdn.u.qiniudn.com");
            return {redirectUrl: url};
        }
        if (details.url.match("http://fonts.googleapis.com")) {
            return {cancel: true};
        }
    },
    {urls:["http://worker.codeforces.ru/*", "http://fonts.googleapis.com/*"]},
    ["blocking"]
);
