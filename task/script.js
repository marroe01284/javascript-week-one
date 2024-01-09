const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        available: true
    },
    {
        title: "1984",
        author: "George Orwell",
        available: false
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        available: true
    }
];

const bookContainer = document.querySelector(".book-container");
console.log("bookContainer:", bookContainer);

let html = ""; 

const totalItemsOfBooks = books.length;
console.log("totaItemsOfBooks:", totalItemsOfBooks);
for (let i = 0; i < totalItemsOfBooks; i++){
    console.log(books[i])

    html +=`
            <div class="books book">
            <h2>Title: ${books[i].title}</h2>
            <p>author: ${books[i].author}</p>
            <p>Available: ${books[i].available ? "yes it is available" : "no its not available"}</p>
            </div>
    `;
    console.log(html);
}
bookContainer.innerHTML = html;