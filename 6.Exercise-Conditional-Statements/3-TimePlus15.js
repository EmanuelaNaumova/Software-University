function timePlus15 (input){
    let hour = Number(input[0]);
    let minute = Number(input[1]);

    let minutes = hour * 60 + minute + 15;

    let newHour = Math.floor(minutes / 60);
    let newMin = minutes % 60;

    if (newHour == 24) {
        newHour = 0;
    }

    if (newMin < 10){
        console.log(`${newHour}:0${newMin}`);
    }else {
        console.log(`${newHour}:${newMin}`);
    }
}
timePlus15 (["1","46"]);