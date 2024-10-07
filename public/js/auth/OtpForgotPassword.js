document
  .getElementById("formOtpForgotPassword")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const otp = document.getElementById("otp").value;
    const errorMessage = document.getElementById("error-massage");

    if (otp === "") {
      errorMessage.textContent = "Otp wajib diisi";
      return;
    }

    if (otp === "123") {
      window.location.href = "passwordChanged.html";
    } else {
      errorMessage.textContent = "OTP Salah";
    }
  });
