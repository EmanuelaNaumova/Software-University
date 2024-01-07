function foodDel (input) {
let chickenMenu = Number (input[0]);
let fishMenu = Number (input[1]);
let vegMenu = Number (input[2]);

let menusPrice = chickenMenu * 10.35 + fishMenu * 12.40 + vegMenu * 8.15;
let dessertPrice = 0.2 * menusPrice;
let totalPrice = menusPrice + dessertPrice + 2.50;

console.log(totalPrice);
}
foodDel (["2","4","3"]);