// Dynamic greeting with conditional branching
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("username");

  if (user) {
    alert(`Welcome back, ${user}!`);
  } else {
    const name = prompt("What's your name?");
    if (name) {
      localStorage.setItem("username", name);
      alert(`Nice to meet you, ${name}!`);
    }
  }

  // DOM interaction example
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      alert(`You clicked on ${card.textContent}`);
    });
  });

  // Object + array + array method + template literal
  const languages = [
    { name: "Python", typed: "Dynamic" },
    { name: "C++", typed: "Static" },
    { name: "JavaScript", typed: "Dynamic" },
  ];

  const boton = document.querySelector(".lengu");
  boton.addEventListener("click", (e) => {
    const dynamicLangs = languages
      .filter((lang) => lang.typed === "Dynamic")
      .map((lang) => `🧠 ${lang.name}`)
      .join(", ");
    alert(`Dynamic languages include: ${dynamicLangs}`);
  });
});

const ano = document.getElementById("mostrarAnoAtual");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();

const last = document.getElementById("lasti");
const oLastModif = new Date(document.lastModified);
const resultado = oLastModif.toLocaleString();
last.innerHTML = resultado;
