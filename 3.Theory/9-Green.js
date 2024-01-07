function green (input){
    let squareМeter = (input[0]);
    let finalPrice = squareМeter * 7.61 ;
    let discount = finalPrice * 0.18;
    let finalDiscount = finalPrice - discount
    
console.log(`The final price is: ${finalDiscount} lv.`)
console.log(`The discount is: ${discount} lv.`)
}
green (["550"]);