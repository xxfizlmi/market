
document
  .getElementById("formPasswordChanged")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const newpassword = document.getElementById("newPassword").value;
    const confirmationpassword = document.getElementById("confirmationPassword").value;
    const errorMessage = document.getElementById("error-massage");

    if (newpassword === "" || confirmationpassword === "") {
      errorMessage.textContent = "Password wajib diisi";
      return;
    }

    if (newpassword === "123" || confirmationpassword === "123") {
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = "Password Salah";
    }
  });
