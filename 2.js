function spaceShip(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let theaverageheightoftheastronauts = Number(input[3]);

    let spaceShipVol = width * length * height;
    let roomVol = (theaverageheightoftheastronauts + 0.40) * 2 * 2;

    let spaceforaustrounauts = Math.floor(spaceShipVol / roomVol);

    if(spaceforaustrounauts >= 3 && spaceforaustrounauts <= 10) {
        console.log (`The spacecraft holds ${spaceforaustrounauts} astronauts.`);
    }else if (spaceforaustrounauts < 3) {
        console.log(`The spacecraft is too small.`);
    }else{
        console.log(`The spacecraft is too big.`);
    }

}
spaceShip (["4.5",
"4.8",
"5",
"1.75"]);


// if (moneyEarned >= vacationPrice){
//     let moneyLeft = moneyEarned - vacationPrice;
//     console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
// }else {
//     let moneyNeeded = vacationPrice - moneyEarned;
//     console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
// }
// }