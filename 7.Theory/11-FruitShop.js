function fruitShop (input){
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let finalSum = 0;

    if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday" ){
        switch(fruit){
            case "banana": finalSum = quantity * 2.50; break;
            case "apple": finalSum = quantity * 1.20; break;
            case "orange": finalSum = quantity * 0.85; break;
            case "grapefruit": finalSum = quantity * 1.45; break;
            case "kiwi": finalSum = quantity * 2.70; break;
            case "pineapple": finalSum = quantity * 5.50; break;
            case "grapes": finalSum = quantity * 3.85; break;
            default: console.log("error"); return;
        }

    }else if (day == "Sunday" || day == "Saturday"){
        switch(fruit){
            case "banana": finalSum = quantity * 2.70;break;
            case "apple": finalSum = quantity * 1.25; break;
            case "orange": finalSum = quantity * 0.90; break;
            case "grapefruit": finalSum = quantity * 1.60; break;
            case "kiwi": finalSum = quantity * 3.00; break;
            case "pineapple": finalSum = quantity * 5.60; break;
            case "grapes": finalSum = quantity * 4.20; break;
            default: console.log("error"); return;
        }
    }else{
        console.log("error"); return;
    }
    
    console.log(finalSum.toFixed(2));
}
fruitShop (["apple","Tuesday","2"]);