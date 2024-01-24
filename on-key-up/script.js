const firstNameInput = document.querySelector("#textInput");
const formSignupBTN = document.querySelector("#signUp");

const firstNameErrorMessage = document.querySelector("#nameUnsuitable")
const passwordInput = document.querySelector("#password");
const passwordErrorMessage = document.querySelector("#password-error-message");

firstNameInput.onkeyup = function(event){
   
    let firstNameInputValue = event.target.value;
    console.log(firstNameInputValue)
    console.log(firstNameInputValue.length);

    let totalNumberOfCharsFirstName = firstNameInputValue.length;
     if(totalNumberOfCharsFirstName > 5){
         formSignupBTN.disabled = false;
         firstNameErrorMessage.innerHTML = " Great you have done it";
         firstNameErrorMessage.classList = "success";

     } else{
        formSignupBTN.disabled = true;
        firstNameErrorMessage.innerHTML = "so sad you have a short name";
        firstNameErrorMessage.classList = "error";
    }
    // formSignupBTN = firstNameInputValue.length >=5;
    // totalNumberOfCharsFirstName > 5 ? formSignupBTN.disabled = false : formSignupBTN.disabled = true;
}
passwordInput.onkeyup = function(event){
    let passwordValue = event.target.value;

    let totalNumberOfCharsInPass = passwordValue.length;
    if((passwordValue=== "123456")   (passwordValue==="password")){

        switch(totalNumberOfCharsInPass){
            case totalNumberOfCharsInPass === "123456":
                passwordErrorMessage.innerHTML = "💩 your password is shit";
                break;
                case(totalNumberOfCharsInPass >= 3):
                passwordErrorMessage.innerHTML = "🙆‍♂️ your password is weak";
                break;
                case(totalNumberOfCharsInPass >= 5):
                passwordErrorMessage.innerHTML = "😺 ah yout password is average";
                break;
                case(totalNumberOfCharsInPass >= 6):
                passwordErrorMessage.innerHTML = "👌 yout password is perfect";
            }
        }
}










    // // Get the span elements
    // var shortNameMessage = document.getElementById('shortNameMessage');
    // var suitableNameMessage = document.getElementById('suitableNameMessage');

    // // Check the length of the name and update messages accordingly
    // if (nameInputValue.trim().length < 3) {
    //     shortNameMessage.style.display = 'inline';
    //     suitableNameMessage.style.display = 'none';
    // } else {
    //     shortNameMessage.style.display = 'none';
    //     suitableNameMessage.style.display = 'inline';
    // }



