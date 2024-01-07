function cryptoMiningInvestment(input) {
    let videoCard = Number(input[0]);
    let prehodnik = Number(input[1]);
    let electricityPerDay = Number(input[2]);
    let profit = Number(input[3]);
  
    let finalvideoCardsPrice = videoCard * 13;
    let finalPrehodnikPrice = prehodnik * 13;
    let sumPriceofVandP = finalPrehodnikPrice + finalvideoCardsPrice + 1000;
  
    let profitOf1Card = profit - electricityPerDay;
    let profitofAllCards = 13 * profitOf1Card;
  
    let daysOfReturn = sumPriceofVandP / profitofAllCards;
  
    console.log(Math.ceil(sumPriceofVandP));
    console.log(Math.ceil(daysOfReturn));
  }
  
  cryptoMiningInvestment([700, 15, 0.20, 2]);
  
  
  



// function repainting(input) {
//     let nylonQ = Number(input[0]);
//     let paintQ = Number (input[1]);
//     let thinnerQ = Number (input[2]);
//     let workHours = Number (input[3]);
    
//     let totalNylonQ = nylonQ + 2;
//     let nylonPrice = totalNylonQ * 1.50;
    
//     let extraPaintQ = 0.1 * paintQ;
//     let totalPaintQ = paintQ + extraPaintQ;
//     let paintPrice = totalPaintQ * 14.50;
    
//     let thinnerPrice = thinnerQ * 5;
    
//     let totalMaterialPrice = nylonPrice + paintPrice + thinnerPrice + 0.40;
//     let workersPayPerHour = 0.3 * totalMaterialPrice;
//     let totlaWorkersPay = workHours * workersPayPerHour;
    
//     console.log(totalMaterialPrice + totlaWorkersPay);
    
//     }
//     repainting (["10 ", "11 ", "4 ","8 "]);