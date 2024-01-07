function reqLit(input) {
let pages = Number (input [0]);
let pagesPerHour = Number (input [1]);
let days = Number (input [2]);
let totalHours = pages / pagesPerHour;
let hoursPerDay = totalHours / days;

console.log(hoursPerDay);
}
reqLit  (["212", "20", "2"]);