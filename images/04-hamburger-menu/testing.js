var boxLevelOneFlag, boxOneSubBoxesFlag, boxTwoSubBoxesFlag, boxThreeSubBoxesFlag, boxLevelTwoFlag;

// Describe this function...
function expandBurger() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    document.querySelectorAll('.box-level-one').forEach((selectedElement4) => {
        selectedElement4.style.visibility = (true) ? 'visible' : 'hidden';

    });
    boxLevelOneFlag = true;
    document.querySelectorAll('.box-level-two').forEach((selectedElement5) => {
        selectedElement5.style.visibility = (false) ? 'visible' : 'hidden';

    });
    boxLevelTwoFlag = false;
    let element_hamburger = document.getElementById('hamburger');
    element_hamburger.innerText = '❌';
}

// Describe this function...
function collapseBurger() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    document.querySelectorAll('.box-level-one').forEach((selectedElement6) => {
        selectedElement6.style.visibility = (false) ? 'visible' : 'hidden';

    });
    boxLevelOneFlag = false;
    document.querySelectorAll('.box-level-two').forEach((selectedElement7) => {
        selectedElement7.style.visibility = (false) ? 'visible' : 'hidden';

    });
    boxLevelTwoFlag = false;
    let element_hamburger2 = document.getElementById('hamburger');
    element_hamburger2.innerText = '🍔';
}

// Describe this function...
function hideLevelOneLinks() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    if (boxLevelOneFlag == true) {
        document.querySelectorAll('.box-level-one').forEach((selectedElement8) => {
            selectedElement8.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxLevelOneFlag = false;
    }
    let element_hamburger3 = document.getElementById('hamburger');
    element_hamburger3.innerText = '🍔';
}

// Describe this function...
function hideLevelTwoLinks() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    if (boxLevelTwoFlag == true) {
        document.querySelectorAll('.box-level-two').forEach((selectedElement9) => {
            selectedElement9.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxLevelTwoFlag = false;
    }
}


document.querySelectorAll('.box-level-one').forEach((selectedElement) => {
    selectedElement.style.visibility = (false) ? 'visible' : 'hidden';

});
boxLevelOneFlag = false;
document.querySelectorAll('.box-level-two').forEach((selectedElement2) => {
    selectedElement2.style.visibility = (false) ? 'visible' : 'hidden';

});
boxLevelTwoFlag = false;
boxOneSubBoxesFlag = false;
boxTwoSubBoxesFlag = false;
boxThreeSubBoxesFlag = false;

document.querySelectorAll('.box-link').forEach((selectedElement3) => {

    selectedElement3.addEventListener('click', (event) => {
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
    if (boxOneSubBoxesFlag == false) {
        document.querySelectorAll('.box-one-sub-box').forEach((selectedElement10) => {
            selectedElement10.style.visibility = (true) ? 'visible' : 'hidden';

        });
        boxOneSubBoxesFlag = true;
    } else if (boxOneSubBoxesFlag == true) {
        document.querySelectorAll('.box-one-sub-box').forEach((selectedElement11) => {
            selectedElement11.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxOneSubBoxesFlag = false;
    }

});

document.getElementById('box-name-two').addEventListener('click', (event) => {
    if (boxTwoSubBoxesFlag == false) {
        document.querySelectorAll('.box-two-sub-box').forEach((selectedElement12) => {
            selectedElement12.style.visibility = (true) ? 'visible' : 'hidden';

        });
        boxTwoSubBoxesFlag = true;
    } else if (boxTwoSubBoxesFlag == true) {
        document.querySelectorAll('.box-two-sub-box').forEach((selectedElement13) => {
            selectedElement13.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxTwoSubBoxesFlag = false;
    }

});

document.getElementById('box-name-three').addEventListener('click', (event) => {
    if (boxThreeSubBoxesFlag == false) {
        document.querySelectorAll('.box-three-sub-box').forEach((selectedElement14) => {
            selectedElement14.style.visibility = (true) ? 'visible' : 'hidden';

        });
        boxThreeSubBoxesFlag = true;
    } else if (boxThreeSubBoxesFlag == true) {
        document.querySelectorAll('.box-three-sub-box').forEach((selectedElement15) => {
            selectedElement15.style.visibility = (false) ? 'visible' : 'hidden';

        });
        boxThreeSubBoxesFlag = false;
    }

});