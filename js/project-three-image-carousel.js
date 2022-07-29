// CAROUSEL IMAGE MVP
var imagesArray, temporary;

function displayImage() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_carousel_image = document.getElementById('carousel-image');
    element_carousel_image.setAttribute("src", imagesArray[0]);
}

function cycleForward() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    temporary = imagesArray.shift();
    imagesArray.push(temporary);
}

function cycleBackwards() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    temporary = imagesArray.pop();
    imagesArray.unshift(temporary);
}

imagesArray = ['https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book001.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book002.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book003.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book004.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book005.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book006.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book007.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book008.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book009.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book010.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book011.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book012.png'];
displayImage();

document.getElementById('forward-button').addEventListener('click', (event) => {
    cycleForward();
    displayImage();

});

document.getElementById('backward-button').addEventListener('click', (event) => {
    cycleBackwards();
    displayImage();

});

// CAROUSEL IMAGES ITERATION 
var imagesArray2, temporary2, position2;

function displayImage2() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_carousel_image = document.getElementById('carousel-image2');
    element_carousel_image.setAttribute("src", imagesArray2[0]);
}

function displayPosition2() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_current_position = document.getElementById('current-position2');
    element_current_position.innerText = position2[0];
}

function cycleForward2() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    temporary2 = imagesArray2.shift();
    imagesArray2.push(temporary2);
    temporary2 = position2.shift();
    position2.push(temporary2);
}

function cycleBackward2() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    temporary2 = imagesArray2.pop();
    imagesArray2.unshift(temporary2);
    temporary2 = position2.pop();
    position2.unshift(temporary2);
}


imagesArray2 = ['https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book001.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book002.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book003.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book004.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book005.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book006.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book007.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book008.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book009.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book010.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book011.png', 'https://raw.githubusercontent.com/bazmurphy/cyf-blocks/main/images/storybook/book012.png'];
position2 = ['🟣⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪', '⚪🟣⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪', '⚪⚪🟣⚪⚪⚪⚪⚪⚪⚪⚪⚪', '⚪⚪⚪🟣⚪⚪⚪⚪⚪⚪⚪⚪', '⚪⚪⚪⚪🟣⚪⚪⚪⚪⚪⚪⚪', '⚪⚪⚪⚪⚪🟣⚪⚪⚪⚪⚪⚪', '⚪⚪⚪⚪⚪⚪🟣⚪⚪⚪⚪⚪', '⚪⚪⚪⚪⚪⚪⚪🟣⚪⚪⚪⚪', '⚪⚪⚪⚪⚪⚪⚪⚪🟣⚪⚪⚪', '⚪⚪⚪⚪⚪⚪⚪⚪⚪🟣⚪⚪', '⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪🟣⚪', '⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪🟣'];
displayImage2();
displayPosition2();


document.getElementById('forward-button2').addEventListener('click', (event) => {
    cycleForward2();
    displayImage2();
    displayPosition2();

});

document.getElementById('backward-button2').addEventListener('click', (event) => {
    cycleBackward2();
    displayImage2();
    displayPosition2();

});