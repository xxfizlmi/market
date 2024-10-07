document
  .getElementById("formRegister")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const ttl = document.getElementById("ttl").value;
    const gender = document.getElementById("gender").value;
    const nomorhp = document.getElementById("nomorhp").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-massage");

    if (
      name === "" ||
      ttl === "" ||
      gender === "" ||
      nomorhp === "" ||
      email === "" ||
      password === ""
    ) {
      errorMessage.textContent = "Email dan Password wajib diisi";
      return;
    }

    if (
      name === "Hafiz" ||
      ttl === "2906" ||
      gender === "pria" ||
      nomorhp === "0822" ||
      email === "asj" ||
      password === "123"
    ) {
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = "Email atau password Salah";
    }
  });
