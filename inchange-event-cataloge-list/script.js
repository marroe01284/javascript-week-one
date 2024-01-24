//1. select my dropdown
const dropdown = document.querySelector("#circles");
const criclesContainer = document.querySelector(".circles-container")

dropdown.onchange = function (event) {
    criclesContainer.innerHTML = ""
    for (let x = 1; x <= this.value; x++) {
        criclesContainer.innerHTML += `
        <div class="circle"> ${x}</div>
        `
    }
}


