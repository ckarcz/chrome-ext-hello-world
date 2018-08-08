const color = '#3aa757';

chrome.runtime.onInstalled.addListener(function () {

    // store color in chrome storage
    chrome.storage.sync.set({ color:  color}, function () {
        console.log('Set color to ' + color + ' in chrome storage.');
    });

    // conditional page action. extension toolbar button will only be enabled for below host.
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

});