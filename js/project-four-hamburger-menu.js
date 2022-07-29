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


// HAMBURGER MENU ITERATION
var boxOneSubBoxesFlag, boxLevelOneFlag, boxTwoSubBoxesFlag, boxThreeSubBoxesFlag, boxLevelTwoFlag;

// Describe this function...
function expandBurger() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    document.querySelectorAll('.box-level-one').forEach((selectedElement2) => {
        selectedElement2.style.visibility = (true) ? 'visible' : 'hidden';

    });
    boxLevelOneFlag = true;
    document.querySelectorAll('.box-level-two').forEach((selectedElement3) => {
        selectedElement3.style.visibility = (false) ? 'visible' : 'hidden';

    });
    boxLevelTwoFlag = false;
    let element_hamburger = document.getElementById('hamburger');
    element_hamburger.innerText = '❌';
    element_hamburger.style.backgroundColor = '#990000';
}

// Describe this function...
function collapseBurger() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    document.querySelectorAll('.box-level-one').forEach((selectedElement4) => {
        selectedElement4.style.visibility = (false) ? 'visible' : 'hidden';

    });
    boxLevelOneFlag = false;
    document.querySelectorAll('.box-level-two').forEach((selectedElement5) => {
        selectedElement5.style.visibility = (false) ? 'visible' : 'hidden';

    });
    boxLevelTwoFlag = false;
    let element_hamburger2 = document.getElementById('hamburger');
    element_hamburger2.innerText = '🍔';
    element_hamburger2.style.backgroundColor = '#009900';
}


collapseBurger();
boxOneSubBoxesFlag = false;
boxTwoSubBoxesFlag = false;
boxThreeSubBoxesFlag = false;
document.querySelectorAll('.box-link').forEach((selectedElement) => {

    selectedElement.addEventListener('click', (event) => {
        collapseBurger();

    });
});


document.getElementById('hamburger').addEventListener('click', (event) => {
    if (boxLevelOneFlag == false) {
        expandBurger();
    } else if (boxLevelOneFlag == true) {
        collapseBurger();
    }

});

document.getElementById('box-name-one').addEventListener('click', (event) => {
    if (boxOneSubBoxesFlag == true) {
        document.querySelectorAll('.box-one-sub-box').forEach((selectedElement6) => {
            selectedElement6.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxOneSubBoxesFlag = false;
    } else if (boxOneSubBoxesFlag == false) {
        document.querySelectorAll('.box-one-sub-box').forEach((selectedElement7) => {
            selectedElement7.style.visibility = (true) ? 'visible' : 'hidden';

        });
        boxOneSubBoxesFlag = true;
    }

});

document.getElementById('box-name-two').addEventListener('click', (event) => {
    if (boxTwoSubBoxesFlag == false) {
        document.querySelectorAll('.box-two-sub-box').forEach((selectedElement8) => {
            selectedElement8.style.visibility = (true) ? 'visible' : 'hidden';

        });
        boxTwoSubBoxesFlag = true;
    } else if (boxTwoSubBoxesFlag == true) {
        document.querySelectorAll('.box-two-sub-box').forEach((selectedElement9) => {
            selectedElement9.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxTwoSubBoxesFlag = false;
    }

});

document.getElementById('box-name-three').addEventListener('click', (event) => {
    if (boxThreeSubBoxesFlag == false) {
        document.querySelectorAll('.box-three-sub-box').forEach((selectedElement10) => {
            selectedElement10.style.visibility = (true) ? 'visible' : 'hidden';

        });
        boxThreeSubBoxesFlag = true;
    } else if (boxThreeSubBoxesFlag == true) {
        document.querySelectorAll('.box-three-sub-box').forEach((selectedElement11) => {
            selectedElement11.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxThreeSubBoxesFlag = false;
    }

});