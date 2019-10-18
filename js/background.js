let dark = false;

chrome.browserAction.onClicked.addListener(function(tabb) {
    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            var tab = tabs[i];
            if (tab.url.indexOf(".cpd.ua.es/") > -1) {
                settup(dark, tab.id);
            }
        }
        dark = !dark;
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf(".cpd.ua.es/") > -1) {
        var file = dark ? 'js/darker.js' : 'js/default.js';
        try {
            var stylesheet = document.querySelector('[id="dark-ua-mode"]');
            stylesheet.parentNode.removeChild(stylesheet);
        } catch (error) {}
        chrome.tabs.executeScript(tabId, { file: file });
    }
});

function settup(dark, tabid) {
    const icon = dark ? 'icons/icon.png' : 'icons/icon_dark.png';
    const theme = dark ? 'js/default.js' : 'js/darker.js';

    chrome.browserAction.setIcon({ path: icon });
    chrome.tabs.executeScript(tabid, { file: theme });
}