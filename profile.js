const colorAlert = evt => alert("Blue");
const placeAlert = evt => alert("Japan");
const ritualAlert = evt => alert("PC Gaming");

let colorBtn = document.querySelector('button#color');
let placeBtn = document.querySelector('button#place');
let ritualBtn = document.querySelector('button#ritual');

colorBtn.addEventListener("click",colorAlert);
placeBtn.addEventListener("click",placeAlert);
ritualBtn.addEventListener("click",ritualAlert);