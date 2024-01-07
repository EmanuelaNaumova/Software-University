function shopping (input) {
    let budget = Number (input[0]);
    let videoCardsCount = Number (input[1]);
    let processorsCount = Number (input[2]);
    let ramCount = Number (input[3]);

    let finalVideoCardPrice = videoCardsCount * 250;

    let procPrice = finalVideoCardPrice * 0.35;
    let finalProcPrice = processorsCount * procPrice;

    let ramPrice = finalVideoCardPrice * 0.10;
    let finalRamPrice = ramCount * ramPrice;

    let finalPrice = finalVideoCardPrice + finalRamPrice + finalProcPrice;

    if (videoCardsCount > processorsCount) {
        finalPrice *= 0.85;
    }

    if (budget >= finalPrice) {
        let moneyLeft = budget - finalPrice;
        console.log (`You have ${moneyLeft.toFixed(2)} leva left!`);
    }else {
        let moneyNeeded = finalPrice - budget;
        console.log (`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }
}

shopping(["920.45","3","1","1"]);