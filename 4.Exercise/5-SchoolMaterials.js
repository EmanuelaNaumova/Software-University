function schoolMaterials(input) {
let packagePens = Number(input[0]);
let packageMarkers = Number(input[1]);
let preparation = Number(input[2]);
let discount = Number(input[3]);

let packagePPrice = packagePens * 5.80;
let packageMPrice = packageMarkers * 7.20;
let preparationPrice = preparation * 1.20;

let finalPrice = packagePPrice + packageMPrice + preparationPrice;

let discountPr = discount/ 100;

let finalPriceWDiscount = finalPrice - (finalPrice * discountPr);

console.log(finalPriceWDiscount);

}

schoolMaterials (["2", "3", "4","25"]);