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