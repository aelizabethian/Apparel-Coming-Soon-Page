//
const button = document.querySelector("button");
const input = document.querySelector(".input");
const main = document.querySelector(".text");
const errorImg = document.querySelector(".errorImg");

//Error Message
const errorMsg = document.createElement("p");
errorMsg.innerHTML = "Please enter a valid email address";
errorMsg.style.color = "hsl(0, 74%, 74%)";
errorMsg.style.display = "none";
errorMsg.style.textAlign = "center";
errorMsg.style.marginTop = "0";
errorMsg.style.paddingTop = "0";
errorMsg.style.paddingBottom = "25px";
main.appendChild(errorMsg);

//Success Message
const successMsg = document.createElement("p");
successMsg.innerHTML = "Thank you for subscribing!";
successMsg.style.color = "hsl(0, 36%, 70%)";
successMsg.style.display = "none";
successMsg.style.textAlign = "center";
successMsg.style.marginTop = "0";
successMsg.style.paddingTop = "0";
successMsg.style.paddingBottom = "25px";
main.appendChild(successMsg);

function validateEmail(input) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (input.value.match(emailFormat)) {
    errorMsg.style.display = "none";
    input.style.border = "1px solid hsl(0, 36%, 70%)";
    errorImg.style.display = "none";
    input.value = "";
    successMsg.style.display = "block";
    return true;
  } else {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
    errorImg.style.display = "block";
    input.style.border = "1px solid red";
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail(input);
});
