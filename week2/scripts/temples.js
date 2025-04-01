const burguer = document.querySelector("#burguer");
const tirarMenu = document.querySelector("#apagar");
const menu = document.querySelector(".menu");

burguer.addEventListener("click", () => {
  menu.style.display = "flex";
  tirarMenu.style.display = "block";
  document.querySelector("#titulo").style.display = "none";
  burguer.style.display = "none";
});
tirarMenu.addEventListener("click", () => {
  menu.style.display = "none";
  tirarMenu.style.display = "none";
  document.querySelector("#titulo").style.display = "block";
  burguer.style.display = "block";
});
const ano = document.getElementById("mostrarAnoAtual");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();

const last = document.getElementById("lasti");
const oLastModif = new Date(document.lastModified);
const resultado = oLastModif.toLocaleString();
last.innerHTML = resultado;