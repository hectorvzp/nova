let names = ["Nancy", "Blessing", "Jorge", "Svetlana", "Bob"];

let namesB = names.filter((name) => name.charAt(0) === "B");

let namesLength = names.map((name) => name.length);

let reduce =
  names.reduce((index, suma) => index + suma.length, 0) / names.length;
console.log(reduce);
