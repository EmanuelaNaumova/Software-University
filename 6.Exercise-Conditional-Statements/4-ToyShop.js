function toyShop (input) {
let vacationPrice = Number(input[0]);
let puzzles = Number(input[1]);
let dolls = Number(input[2]);
let bears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);

let moneyEarned = 2.60 * puzzles + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2;
let toysCount = puzzles + dolls + bears + minions + trucks;

if (toysCount >= 50) {
    moneyEarned *= 0.75;
}

moneyEarned *= 0.90;

if (moneyEarned >= vacationPrice){
    let moneyLeft = moneyEarned - vacationPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
}else {
    let moneyNeeded = vacationPrice - moneyEarned;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
}
}
toyShop (["40.8","20","25","30","50","10"]);