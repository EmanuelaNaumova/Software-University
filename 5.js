function dogsCare(input) {
    let foodBought = Number(input[0]);
    let allGFood = foodBought * 1000;

    let foodEaten = 0;
    let totalFood = 0;
    let index = 1; // Start from the second element

    while (index < input.length) {
        let command = input[index];

        if (command === "Adopted") {
            break; // Exit the loop if "Adopted" is encountered
        }

        foodEaten = Number(command);
        totalFood += foodEaten;
        index++;
    }

    if (totalFood > allGFood) {
        console.log(`Food is not enough. You need ${totalFood - allGFood} grams more.`);
    } else {
        console.log(`Food is enough! Leftovers: ${allGFood - totalFood} grams.`);
    }
}

dogsCare(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
dogsCare(["3", "1000", "1000", "1000", "Adopted"]);
dogsCare(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);
