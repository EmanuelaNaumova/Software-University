function numbersDivBy9(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let sum = 0;

    for (let currentNumber = start; currentNumber <= end; currentNumber++){
        if(currentNumber % 9 === 0){
        sum += currentNumber;
        }
        }
        console.log(`The sum: ${sum}`);
        
    for(let currentNumber = start; currentNumber <= end; currentNumber++){
        if(currentNumber % 9 === 0){
        console.log (currentNumber);
        }
    }
}

  numbersDivBy9 (["100", "200"]);