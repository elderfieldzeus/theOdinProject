const checkPasswordMatch = () => {
    const password = document.getElementById("password");
    const confirmPass = document.getElementById("confirmPass");
    const doesNotMatch = document.getElementById("doesNotMatch");
  
    if (password.value !== confirmPass.value) {
      password.classList.add("error");
      confirmPass.classList.add("error");
      doesNotMatch.innerHTML = "* Passwords do not match";
    } else {
      password.classList.remove("error");
      confirmPass.classList.remove("error");
      doesNotMatch.innerHTML = "";
    }
  };