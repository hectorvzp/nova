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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Memphis Tennessee",
    location: "Memphis Tennessee, United States",
    dedicated: "2000, April, 23",
    area: 116642,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/memphis-tennessee-temple/memphis-tennessee-temple-4469.jpg",
  },
  {
    templeName: "Belém Brazil ",
    location: "Belém, Brazil",
    dedicated: "2022, November, 20",
    area: 116642,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31309.jpg",
  },
  {
    templeName: "Caracas Venezuela ",
    location: "Caracas,Venezuela",
    dedicated: "2000, August, 20",
    area: 116642,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/caracas-venezuela-temple/caracas-venezuela-temple-55705.jpg",
  },
];
let templeNew = temples.filter((templo) => {
  const ano = parseInt(templo.dedicated.split(","[0]));
  return ano > 1990;
});
let templeOld = temples.filter((templo) => {
  const ano = parseInt(templo.dedicated.split(",")[0]);
  return ano < 1990;
});
let templeLarge = temples.filter((templo) => {
  const ano = templo.area;
  return ano > 100000;
});
let templeSmall = temples.filter((templo) => {
  const ano = templo.area;
  return ano < 100000;
});

const container = document.querySelector(".container");

const criaPicture = () => {
  return document.createElement("picture");
};
const criaP = () => {
  return document.createElement("p");
};
const criaH2 = () => {
  return document.createElement("h2");
};
const criaImg = () => {
  return document.createElement("img");
};

function createCard(lista) {
  lista.forEach((element) => {
    let picture = criaPicture();
    picture.classList.add("card");
    container.appendChild(picture);
    let name = criaH2();
    name.innerHTML = element.templeName;
    picture.appendChild(name);
    let location = criaP();
    location.classList.add("nome");
    location.innerHTML = `Location: ${element.location}`;
    picture.appendChild(location);
    let dedicated = criaP();
    dedicated.classList.add("nome");
    dedicated.innerHTML = `Dedicated: ${element.dedicated}`;
    picture.appendChild(dedicated);
    let size = criaP();
    size.classList.add("nome");
    size.innerHTML = `Size: ${element.area} sq ft`;
    picture.appendChild(size);
    let temple = criaImg();
    temple.src = element.imageUrl;
    temple.alt = element.name;
    temple.loading = "lazy";
    temple.width = 600;
    temple.height = 400;
    picture.appendChild(temple);
  });
}
function cleanMenu(container) {
  container.forEach((element) => {
    element.removeChild(element);
  });
}

function putCard() {
  createCard(temples);
  document.addEventListener("click", (e) => {
    e.preventDefault();
    const el = e.target;
    if (el.classList.contains("old")) {
      container.textContent = "";
      createCard(templeOld);
    } else if (el.classList.contains("casa")) {
      container.textContent = "";
      createCard(temples);
    } else if (el.classList.contains("new")) {
      container.textContent = "";
      createCard(templeNew);
    } else if (el.classList.contains("large")) {
      container.textContent = "";
      createCard(templeLarge);
    } else if (el.classList.contains("small")) {
      container.textContent = "";
      createCard(templeSmall);
    }
  });
}
putCard();
