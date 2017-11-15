
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete' && tab.active) {

        chrome.storage.local.get(['isLoggedIn', 'user'], function (items) {

            if (items.isLoggedIn) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "http://127.0.0.1:8888/save-url.php?url=" + tab.url + ':' + items.user, true);
                xhr.send();
            }

           console.log(items);
        });
    }
});