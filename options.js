// div section where we will append button child elements
let buttonsDiv = document.getElementById('buttonsDiv');

// available color choices
const colorChoices = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

// func that creats and appends color buttons to the element supplied
function createColorButtons(element, colors) {
    for (let color of colors) {
        let chooseColorBtn = document.createElement('button');
        chooseColorBtn.style.backgroundColor = color;
        chooseColorBtn.addEventListener('click', function () {
            chrome.storage.sync.set({ color: color }, function () {
                console.log('color is ' + color);
            })
        });
        element.appendChild(chooseColorBtn);
    }
}

// execute function
createColorButtons(buttonsDiv, colorChoices);