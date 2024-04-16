const url = "https://poupe-mais-api.vercel.app";

const form = document.getElementById("login-form"); 
const message = document.getElementById("error-message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("user").value;
  const email = document.getElementById("email").value;

  if (username === "" || email === "") {
    message.textContent = "Usuário ou email está vazio";
    return;
  }

  await fetch(`${url}/user/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const { username, monthlyIncome, token } = data.body;

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("monthlyIncome", monthlyIncome);

      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      message.textContent = "Usuário ou email já foram cadastrados.";
      console.error("this", error); // Handle errors
    });
});
