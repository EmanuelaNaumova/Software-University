function summerOutfits (input) {
    let floweType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (floweType) {
        case 'Roses':
            price = flowerCount * 5;
        break;
        
        case 'Dahlias':
            price = flowerCount * 3.8;
        break;

        case 'Tulips':
            price = flowerCount * 2.8;
        break;

        case 'Narcissus':
            price = flowerCount * 3;
        break;

        case 'Gladiolus':
            price = flowerCount * 2.5;
        break
    }

    if (floweType === 'Roses' && flowerCount > 80){
        price *= 0.9;
    }else if (floweType === 'Dahlias' && flowerCount > 90){
        price *= 0.85;
    }else if (floweType === 'Tulips' && flowerCount > 80){
        price *= 0.85;
    }else if (floweType === 'Narcissus' && flowerCount < 120){
        price *= 1.15;
    }else if (floweType === 'Gladiolus' && flowerCount < 80){
        price *= 1.2;
    }

    if (budget >= price){
        console.log(`Hey, you have a great garden with ${flowerCount} ${floweType} and ${(budget - price).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
}
    } 
summerOutfits (["Tulips","88","260"]);