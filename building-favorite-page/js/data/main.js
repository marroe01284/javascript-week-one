import products from "./data/products.js";
console.log("products", products)
const productsContainer = document.querySelector(".products-container");


const savedFavoritesProducts = JSON.parse(window.localStorage.getItem("favorites"));


for (let i = 0; i < products.length; i++) {
    let cssClass = "";
   const doesObjectExist = savedFavoritesProducts.find(function(fav){
        return parseInt(fav.id) === products[i].id
    });
    if(doesObjectExist){
        cssClass = "active-heart"
    }

    console.log(products[i]);
    productsContainer.innerHTML += `
    <div class="product">
    <img src="https://picsum.photos/200" alt="">
    <h3>${products[i].name}</h3>
    <h4>NOK ${products[i].price}</h4>
    <span class="heart-container">
        <svg class="heart" 
        data-name="${products[i].name}"
        data-id="${products[i].id}"
        data-price="${products[i].price}"
                          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"                        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>               
         </svg>
    </span>
</div>
    `;


}

const favorites = document.querySelectorAll(".heart");
let favsToSave = [];
for (let x = 0; x < favorites.length; x++) {
    console.log(favorites[x]);
    favorites[x].addEventListener("click", function () {
        console.log("hey you clicked me i am the heart with index", favorites)
        this.classList.toggle("active-heart");
        let productILikedToSave = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        }
        favsToSave.push(productILikedToSave);
        saveFavs(favsToSave);
    });
}
function saveFavs(favs){
    window.localStorage.setItem("favorites", JSON.stringify(favsToSave));
}

//TO DO i want to move my clicking event of the fav btn to its own function instead of the anonymous function