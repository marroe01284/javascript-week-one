
const article = document.querySelector("#post");
const buttonClick = document.querySelector("#buttonClick");
const postImg = document.querySelector("img")


function showAlert() {
    alert(`this is the author: ${article.dataset.author}`);
}
buttonClick.onclick = showAlert;

postImg.onclick = function(){
    window.open(postImg.dataset.fullsize,"_self");
}

