// COMMENTS MVP
function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return value
    } else {
        return number_value
    }
}

document.getElementById('add-comment').addEventListener('click', (event) => {
    let element_comments_list = document.getElementById('comments-list');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('input-comment').value);
    element_comments_list.appendChild(new_li);
});


// COMMENTS ITERATION 02
var inputComment, inputCommenterName;

function getInputs() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    inputComment = getNumberOrString(document.getElementById('input-comment2').value);
    inputCommenterName = getNumberOrString(document.getElementById('input-commenter-name2').value);
}

function renderComment() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_comments_list = document.getElementById('comments-list2');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = inputCommenterName;

    new_li.appendChild(new_span);
    let new_span2 = document.createElement('span');
    new_span2.innerText = ' : ';

    new_li.appendChild(new_span2);
    let new_span3 = document.createElement('span');
    new_span3.innerText = inputComment;

    new_li.appendChild(new_span3);

    element_comments_list.appendChild(new_li);
}

function displayError() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_error = document.getElementById('error2');
    element_error.innerText = 'Error: Please enter a Name AND a Comment';
}

function clearError() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_error2 = document.getElementById('error2');
    element_error2.replaceChildren();
}

document.getElementById('add-comment2').addEventListener('click', (event) => {
    clearError();
    getInputs();
    if (inputComment == '') {
        displayError();
    } else if (inputCommenterName == '') {
        displayError();
    } else {
        renderComment();
    }

});



// SHOPPING CART LIGHT MVP
var parameter;

// Describe this function...
function addProductToShoppingCart(parameter) {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_shopping_cart = document.getElementById('shopping-cart');
    let new_li = document.createElement('li');
    new_li.innerText = parameter;

    element_shopping_cart.appendChild(new_li);
}

document.getElementById('add-banana').addEventListener('click', (event) => {
    addProductToShoppingCart('Banana🍌');

});

document.getElementById('add-mango').addEventListener('click', (event) => {
    addProductToShoppingCart('Mango🥭');

});

document.getElementById('add-pineapple').addEventListener('click', (event) => {
    addProductToShoppingCart('Pineapple🍍');

});

document.getElementById('add-kiwi').addEventListener('click', (event) => {
    addProductToShoppingCart('Kiwi🥝');

});

document.getElementById('add-watermelon').addEventListener('click', (event) => {
    addProductToShoppingCart('Watermelon🍉');

});

document.getElementById('add-peach').addEventListener('click', (event) => {
    addProductToShoppingCart('Peach🍑');

});

document.getElementById('add-strawberries').addEventListener('click', (event) => {
    addProductToShoppingCart('Stawberries🍓');

});

document.getElementById('add-apple').addEventListener('click', (event) => {
    addProductToShoppingCart('Apple🍏');

});


// SHOPPING CART ITERATION 01
var productName, productPrice, runningTotal;

// Describe this function...
function addProductToShoppingCart2(productName, productPrice) {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_shopping_cart = document.getElementById('shopping-cart2');
    let new_li = document.createElement('li');
    let new_span = document.createElement('span');
    new_span.innerText = 'Item Added: ';

    new_li.appendChild(new_span);
    let new_span2 = document.createElement('span');
    new_span2.innerText = productName;

    new_li.appendChild(new_span2);
    let new_span3 = document.createElement('span');
    new_span3.innerText = '.....';

    new_li.appendChild(new_span3);
    let new_span4 = document.createElement('span');
    new_span4.innerText = 'Price: £';

    new_li.appendChild(new_span4);
    let new_span5 = document.createElement('span');
    new_span5.innerText = productPrice;

    new_li.appendChild(new_span5);

    element_shopping_cart.appendChild(new_li);
    runningTotal.push(productPrice);
}

// Describe this function...
function updateTotalCost() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_total_price = document.getElementById('total-price2');
    element_total_price.replaceChildren();
    let new_span6 = document.createElement('span');
    new_span6.innerText = '£';

    element_total_price.appendChild(new_span6);
    let new_span7 = document.createElement('span');
    new_span7.innerText = runningTotal.reduce((a, b) => a + b, 0);

    element_total_price.appendChild(new_span7);
}


runningTotal = [];
updateTotalCost();


document.getElementById('empty-shopping-cart2').addEventListener('click', (event) => {
    let element_shopping_cart2 = document.getElementById('shopping-cart2');
    element_shopping_cart2.replaceChildren();
    runningTotal = [];
    updateTotalCost();

});

document.getElementById('add-banana2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Banana🍌', 0.2);
    updateTotalCost();

});

document.getElementById('add-mango2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Mango🥭', 0.85);
    updateTotalCost();

});

document.getElementById('add-pineapple2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Pineapple🍍', 1.25);
    updateTotalCost();

});

document.getElementById('add-kiwi2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Kiwi🥝', 0.4);
    updateTotalCost();

});

document.getElementById('add-watermelon2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Watermelon🍉', 2.5);
    updateTotalCost();

});

document.getElementById('add-peach2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Peach🍑', 0.35);
    updateTotalCost();

});

document.getElementById('add-strawberries2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Stawberries🍓', 2);
    updateTotalCost();

});

document.getElementById('add-apple2').addEventListener('click', (event) => {
    addProductToShoppingCart2('Apple🍏', 0.25);
    updateTotalCost();

});

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



// HAMBURGER MENU MVP
var links, sources, navigationShowingFlag, link;

links = ['Link to Section 1', 'Link to Section 2', 'Link to Section 3'];
sources = ['#section-one', '#section-two', '#section-three'];
let element_navigation = document.getElementById('navigation');
element_navigation.style.backgroundColor = '#33cc00';
let element_list_of_links = document.getElementById('list-of-links');
links.forEach((link) => {
    element_list_of_links.setAttribute("class", 'link-class');
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_a.innerText = link;
    new_a.setAttribute("href", sources.shift());

    new_li.appendChild(new_a);

    element_list_of_links.appendChild(new_li);
});
element_list_of_links.style.visibility = (false) ? 'visible' : 'hidden';
document.querySelectorAll('.link-class').forEach((selectedElement) => {

    selectedElement.addEventListener('click', (event) => {
        let element_navigation2 = document.getElementById('navigation');
        element_navigation2.innerText = '☰';
        element_navigation2.style.backgroundColor = '#33cc00';
        let element_list_of_links2 = document.getElementById('list-of-links');
        element_list_of_links2.style.visibility = (false) ? 'visible' : 'hidden';
        navigationShowingFlag = false;

    });
});
navigationShowingFlag = false;

document.getElementById('navigation').addEventListener('click', (event) => {
    if (navigationShowingFlag == false) {
        let element_navigation3 = document.getElementById('navigation');
        element_navigation3.innerText = 'X';
        element_navigation3.style.backgroundColor = '#cc0000';
        let element_list_of_links3 = document.getElementById('list-of-links');
        element_list_of_links3.style.visibility = (true) ? 'visible' : 'hidden';
        navigationShowingFlag = true;
    } else {
        let element_navigation4 = document.getElementById('navigation');
        element_navigation4.innerText = '☰';
        element_navigation4.style.backgroundColor = '#33cc00';
        let element_list_of_links4 = document.getElementById('list-of-links');
        element_list_of_links4.style.visibility = (false) ? 'visible' : 'hidden';
        navigationShowingFlag = false;
    }

});