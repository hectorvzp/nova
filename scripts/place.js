// DATA PARA FOOTER//
const last = document.getElementById("lasti");
const oLastModif = new Date(document.lastModified);
const resultado = oLastModif.toLocaleString();
last.innerHTML = resultado;

const temperatura = 10;
const vento = 5;

const tempeCampo = document.querySelector(".temperatura");
tempeCampo.innerHTML += `${temperatura}°C`;
document.querySelector(".vento").innerHTML += `${vento} km/h`;

calculateWindChill = (vento, temperatura) => {
  const willChill =
    13.12 +
    0.6215 * temperatura -
    11.37 * (vento * 0.16) +
    0.3965 * temperatura * (vento * 0.16);
  return willChill.toFixed(1);
};

if ((temperatura <= 10 || vento > 4, 8)) {
  document.querySelector(".wind").innerHTML += `${calculateWindChill(vento,temperatura)} °C`
}

