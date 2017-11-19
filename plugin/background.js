console.log('dupa');

/*
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete' && tab.active) {

        chrome.storage.local.get(['isLoggedIn', 'user'], function (items) {

            if (items.isLoggedIn) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "http://127.0.0.1:8888/save-url.php?url=" + tab.url + '|' + items.user, true);
                xhr.send();
            }
        });
    }
});
*/

var requestFilter = {urls: ["<all_urls>"]};

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {

        if (details.type === "main_frame") {

            chrome.storage.local.get(['isLoggedIn', 'user'], function (items) {

                if (items.isLoggedIn) {
                    console.log(details);
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", "http://127.0.0.1:8888/save-url.php?url=" + details.url + '|' + details.method + '|' + items.user, true);
                    xhr.send();
                }
            });
        }
    },
    requestFilter
);