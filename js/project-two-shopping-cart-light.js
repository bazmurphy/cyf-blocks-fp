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