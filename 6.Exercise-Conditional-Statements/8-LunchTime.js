function lunchTime(input){
    let series = (input[0]);
    let episodDuration = Number (input[1]);
    let breakDuration = Number (input[2]);

    let lunchDuration = (1/8) * breakDuration;
    let restDuration = (1/4) * breakDuration;
    
    let freeTime = breakDuration - lunchDuration - restDuration;

    if (freeTime >= episodDuration) {
        let timeLeft = freeTime - episodDuration;
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }else {
        let timeNeeded = episodDuration - freeTime;
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(timeNeeded)} more minutes.`);

    }
}
lunchTime (["Game of Thrones","60","96"]);