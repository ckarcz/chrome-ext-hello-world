// change color button in the extension popup
let changeColorBtn = document.getElementById('changeColorBtn');

// get color item from chrome storage and set changeColorBtn bg color to it.
chrome.storage.sync.get('color', function (data) {
    changeColorBtn.style.backgroundColor = data.color;
    changeColorBtn.setAttribute('value', data.color);
});

// on changeColorBtn click, change active tab page bg color to color
changeColorBtn.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
};