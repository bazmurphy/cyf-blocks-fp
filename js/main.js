// COMMENTS
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


// SHOPPING CART LIGHT
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


// IMAGE CAROUSEL
var imagesArray, temporary;

// Describe this function...
function displayImage() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_carousel_image = document.getElementById('carousel-image');
    element_carousel_image.setAttribute("src", imagesArray[0]);
}

// Describe this function...
function cycleForward() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    temporary = imagesArray.shift();
    imagesArray.push(temporary);
}

// Describe this function...
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


// HAMBURGER MENU
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