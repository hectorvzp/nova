// const input = document.querySelector("#favchap");
// const button = document.querySelector("button");
// const list = document.querySelector("#list");

// const creaApagar = () => {
//   const apagar = document.createElement("button");
//   apagar.textContent = "❌";
//   apagar.classList.add("apagar");
//   return apagar;
// };
// const creaLi = () => {
//   const li = document.createElement("li");
//   return li;
// };
// function printarLivros() {
//   button.addEventListener("click", () => {
//     if (input.value != "") {
//       const li = creaLi();
//       const apagar = creaApagar();
//       li.textContent = input.value;
//       li.append(apagar);
//       list.append(li);
//       input.value = "";
//       input.focus();
//     } else {
//       return;
//     }
//   });
// }
// function clicarApagar() {
//   document.addEventListener("click", (e) => {
//     const el = e.target;
//     if (el.classList.contains("apagar")) {
//       el.parentElement.remove();
//     }
//   });
// }

// printarLivros();
// clicarApagar();
let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}