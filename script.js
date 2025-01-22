const myLibrary = [];

function Book(title, author, noOfPages, read){

    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.read = read;
}

function addBookToLibrary(title, author, noOfPages, read) {
    let book = new Book(title, author, noOfPages, read);
    myLibrary.push(book);
  }

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');
addBookToLibrary('1984', 'George Orwell', 328, 'yes');
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, 'no');
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, 'yes');
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, 'no');
addBookToLibrary('Moby-Dick', 'Herman Melville', 635, 'yes');


// displaying books in library
myLibrary.forEach((book)=>{
    const PROJECTS= document.querySelector(".projects");
    PROJECTS.innerHTML += `<div class="project-cards">
              <div class="title">${book.title}</div>
              <div class="card-content">
                    Author: ${book.author} <br>
                    No of Pages: ${book.noOfPages}<br>
                    Read: ${book.read}
              </div>
              <div class="bookmark">
                <div class="star"></div>
                <div class="seen"></div>
                <div class="share"></div>
              </div>
            </div>`

})

document.querySelector(".new-book").addEventListener("click",()=>{
    const FORM = document.querySelector("form");
    FORM.classList.toggle("new-book-form")
})