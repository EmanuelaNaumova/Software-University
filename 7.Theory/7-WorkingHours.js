function workingHours (input){
    let hour = Number(input[0]);
    let day = (input[1]);

    day = day.toLowerCase();

    if (hour >= 10 && hour < 18 && (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday" || day === "saturday") ){
        console.log("open")
    }else{
        console.log("closed")
    }

}
workingHours (["11", "Sunday"]);