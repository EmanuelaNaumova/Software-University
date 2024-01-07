function calculator (input) {
let depSum = Number(input [0]);
let period = Number(input [1]);
let percent = Number(input [2]);
let annualInDec = percent / 100;
let sum = depSum + period * ((depSum * annualInDec) / 12);
console.log(sum);
}
calculator (["200","3","5.7"]);