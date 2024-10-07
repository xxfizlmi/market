
document
  .getElementById("formForgotPassword")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-massage");

    if (email === "") {
      errorMessage.textContent = "Email wajib diisi";
      return;
    }

    if (email === "asj") {
      window.location.href = "otpForgotPassword.html";
    } else {
      errorMessage.textContent = "Email Salah";
    }
  });
