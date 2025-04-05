let i =0;
let bgColor;


document.querySelector('#generateButton').addEventListener('click', function() {
    const blockContainer = document.querySelector('#blockContainer');
    const block = document.createElement('span');
    block.className = 'block';
    const randomColor = getRandomColor();
    block.style.backgroundColor = randomColor;
    blockContainer.appendChild(block);

    // the button and border color changes to random color
    document.querySelector('#generateButton').style.backgroundColor = randomColor;
    blockContainer.style.borderColor = randomColor;

    // the title text to rainbow color
    document.querySelector('#titleText').classList.add('rainbow-active');

    // the background color changes to random color
    i++;
    if (i%2 === 0) {

        mainBg = document.querySelector('body');
        mainBg.style.backgroundColor = bgColor;
        bgColor = randomColor;
    }
    else {
        mainBg = document.querySelector('body');
        mainBg.style.backgroundColor = bgColor;
        bgColor = randomColor;
    }

});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

