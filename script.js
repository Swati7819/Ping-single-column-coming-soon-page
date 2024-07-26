let btn = document.querySelector("#btn");
let errorMessage = document.querySelector(".error-text");

errorMessage.style.display = "none";
btn.addEventListener("click", () => {
  let email = document.querySelector("#email");
//   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|mobi|name|aero|jobs|museum|co\.[a-z]{2}|[a-z]{2,})$/;


  const isValid = emailPattern.test(email.value);
  if (isValid) {
    console.log("valid");
    window.location.href = "registration.html";
  } else {
    errorMessage.style.display = "block";
    email.classList.remove("validEmail");
    email.classList.add("errorClass");

    email.addEventListener("focus", () => {
      errorMessage.style.display = "none";
      email.classList.add("validEmail");
      email.classList.remove("errorClass");
    });
  }
});

