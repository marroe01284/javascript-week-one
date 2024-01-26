const ageInput = document.querySelector("#age")
const enterBTN = document.querySelector(".enter-btn")

enterBTN.onclick = function () {
    const age = ageInput.value;

    const isAgeok = oldEnough(age);

    if (isAgeok) {
        document.location.href = "welcome.html";
    } else {
        alert("you shall not pass!")
    }
}

function oldEnough(ageToCheck) {
    if (ageToCheck >= 13) {
        return true;
    }
    return false;
}