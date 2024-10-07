
document
  .getElementById("formLogin")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
      errorMessage.textContent = "Email dan Password wajib diisi";
      return;
    }

    if (email === "asj" || password === "123") {
      alert("Login berhasil!");
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = "Email atau password Salah";
    }
  });
