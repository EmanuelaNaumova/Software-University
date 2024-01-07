function basketball(input) {
let taxPerYear = Number (input[0]);

let bShoes = taxPerYear - (0.40 * taxPerYear);
let bEquipment = bShoes - (0.20 * bShoes);
let bBall = (1/4) * bEquipment;
let bAccessories = (1/5) * bBall;

let finalPirce = taxPerYear + bShoes + bEquipment + bBall + bAccessories;

console.log(finalPirce);
}

basketball(["365"]);