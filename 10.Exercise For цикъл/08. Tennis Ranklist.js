function tennisRankList (input) {
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let pointsWon = 0;
    let tournamentsWon = 0;

    for (let i = 2; i <tournamentCount + 2; i++) {
        let result = input [i];

        if (result === 'W'){
            pointsWon += 2000;
            tournamentsWon++;
        }else if (result === 'F'){
            pointsWon += 1200;
        }else if (result === 'SF'){
            pointsWon +=720
        }
    }
    
    console.log(`Final points: ${initialPoints + pointsWon}`); 
    
    let avgPoints = pointsWon / tournamentCount;
    console.log(`Average points: ${Math.floor(avgPoints)}`);

    let wonPercents = (tournamentsWon / tournamentCount) * 100;
    console.log(`${wonPercents.toFixed(2)}%`);
}
tennisRankList (["5", "1400","F","SF","W","W","SF"]);