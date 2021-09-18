console.log("This is project2.");
// Constractor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constractor
function Display() {

    // Add method to display prototype
    Display.prototype.add = function (book) {
        console.log('adding to UI');
        tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`
        tableBody.innerHTML += uiString;
    }

    // implement the clear function
    Display.prototype.clear = function () {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    Display.prototype.validate = function (book) {

        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    Display.prototype.show = function (type, diplayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert- ${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong>  ${diplayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 3000);


    }
}





// add submit eventlistner to libraryForm

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;

    let Cooking = document.getElementById('Cooking');
    let Programing = document.getElementById('Programing');
    let Fiction = document.getElementById('Fiction');

    if (Cooking.checked) {
        type = Cooking.value;
    }
    if (Programing.checked) {
        type = Programing.value;
    }
    if (Fiction.checked) {
        type = Fiction.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book is successfully added');

    }
    else {
        display.show('error', 'You cannot add this book');
    }



    e.preventDefault();
}

