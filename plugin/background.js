

console.log('jestem w dupie');

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://127.0.0.1:8888/save-url.php?url=" + tab.url, true);
        xhr.send();

        console.log(tab.url);
        // do your things
    }
})