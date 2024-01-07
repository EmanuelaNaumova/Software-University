function accountBalance(input) {
    let totalSum = 0;
    let index = 0;
    let currrentRow = input[index];

    while (currrentRow !== "NoMoreMoney") {
       let currentRowNumber = Number(currrentRow);
       
       if (currentRowNumber < 0) {
        console.log('Invalid operation!')
        break;
       }
       
       console.log(`Increase: ${currentRowNumber.toFixed(2)}`);
       totalSum += currentRowNumber;

       index++;
       currrentRow = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
 }
 
 accountBalance (["120", "45.55", "-150"]);