function ontimeforexam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let timeDifference = examTime - arrivalTime;

    if (timeDifference < -30) {
        console.log("Late");
    } else if (timeDifference <= 0) {
        console.log("On time");
    } else {
        console.log("Early");
    }

    if (timeDifference !== 0) {
        let hours = Math.abs(Math.floor(timeDifference / 60));
        let minutes = Math.abs(timeDifference % 60);

        if (hours > 0) {
            console.log(`${hours}:${minutes < 10 ? "0" : ""}${minutes} hours ${timeDifference < 0 ? "after" : "before"} the start`);
        } else {
            console.log(`${minutes} minutes ${timeDifference < 0 ? "after" : "before"} the start`);
        }
    }
}

// Example usage:
ontimeforexam(["9", "30", "9", "50"]);
