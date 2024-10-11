var ul = document.getElementById('items');
var buttonAdd = document.getElementById('add');
var buttonDelete = document.getElementById('delete');
var buttonUpdate = document.getElementById('update');

function loadItems() {
    var storedItems = localStorage.getItem('items');
    if (storedItems) {
        var items = storedItems.split(';');
        items.forEach(function(item) {
            addItemToList(item.trim());
        });
    }
}

function addItemToList(text) {
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    var div = document.createElement('div');
    li.textContent = text;
    div.appendChild(li);
    div.appendChild(checkbox);
    ul.appendChild(div);
}

function saveItems() {
    var items = [];
    var listItems = ul.querySelectorAll('li');
    listItems.forEach(function(item) {
        items.push(item.textContent);
    });
    localStorage.setItem('items', items.join(';'));
}

buttonAdd.addEventListener('click', function() {
    var input = document.querySelector('input[type="text"]');
    if (input.value === "") {
        alert('Please fill out the input field');
    } else {
        addItemToList(input.value);
        saveItems();
        input.value = "";
    }
});

buttonDelete.addEventListener('click', function() {
    var checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedItems.forEach(function(checkbox) {
        var parentDiv = checkbox.parentNode;
        parentDiv.parentNode.removeChild(parentDiv);
    });
    saveItems();
});

buttonUpdate.addEventListener('click', function() {
    var checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    checkedItems.forEach(function(checkbox) {
        var input = document.querySelector('input[type="text"]'); 
        var parentDiv = checkbox.parentNode;
        parentDiv.firstChild.textContent = input.value;
    });
    saveItems();
});

loadItems();
