//fetch book data API

let movieContainer = document.querySelector(".movie-container");

function showDropdown() {
    document.getElementById("categoriesDropdown").style.display = "block";
}

function hideDropdown() {
    document.getElementById("categoriesDropdown").style.display = "none";
}

let squareEyes = fetch("https://api.noroff.dev/api/v1/square-eyes")
    .then(function (getResponse) {
        return getResponse.json();
    })
    .then(result => {
        let movies = result;
        console.log(movies);
        for(var i = 0; i < movies.length; i++){
            if(movies[i].onSale === false){
console.log(movies.id);
                movieContainer.innerHTML += `
                <div class="movie-card"> 
                <img class="poster" src="${movies[i].image}">
                <div class="movie-details">
                <h2 id="movieTitle">${movies[i].title}</h2>
                <span class="genre"> Genre: ${movies[i].genre}</span>
                <span class="description">${movies[i].description}</span>
                <div class="price-rating">
                <span class="rating"> Rating ${movies[i].rating}</span>
                <span class="price">${movies[i].price}</span>
                </div>
                <a href="product.html?id=${movies[i].id}">
                <button class="buy"> Buy movie</button>
                </a>
                </div>
                </div>`
            }else{
                movieContainer.innerHTML += `
                <div class="movie-card"> 
                <img class="poster" src="${movies[i].image}">
                <div class="movie-details">
                <h2 id="movieTitle">${movies[i].title}</h2>
                <span class="genre"> Genre: ${movies[i].genre}</span>
                <span class="description">${movies[i].description}</span>
                <div class="price-rating">
                <span class="rating"> Rating ${movies[i].rating}</span>
                <span class="price-disc">${movies[i].price}</span>
                <span class="disc-price"> ${movies[i].discountedPrice}</span>
                </div>
                <a href="product.html?id=${movies[i].id}">
                <button class="buy"> Buy movie</button>
                </a>
                </div>
                </div>`
            }
        }
    });

   
