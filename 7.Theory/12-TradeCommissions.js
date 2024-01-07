function tradeCommission (input) {
    let city = input[0];
    let sales = Number (input[1]);
    let commision = 0;

    switch (city) {
        case 'Sofia':
        if (sales < 0){
            console.log('error'); 
        }else if (sales <= 500) {
            commision = (5 / 100) * sales;
        }else if ( sales <= 1000){ 
            commision = (7 / 100) * sales;
        }else if(sales <= 10000){ 
            commision = (8 / 100) * sales;
        }else{
            commision = (12 / 100) * sales;
        }
        break;

        case 'Varna':
        if (sales < 0){
            console.log('error'); 
        }else if (sales <= 500) {
            commision = (4.5 / 100) * sales;
        }else if ( sales <= 1000){ 
            commision = (7.5 / 100) * sales;
         }else if(sales <= 10000){ 
            commision = (10 / 100) * sales;
        }else{
            commision = (13 / 100) * sales;
        }
        break;

        case 'Plovdiv':
        if (sales < 0){
            console.log('error'); 
        }else if (sales <= 500) {
            commision = (5.5 / 100) * sales;
        }else if ( sales <= 1000){ 
            commision = (8 / 100) * sales;
         }else if(sales <= 10000){ 
            commision = (12 / 100) * sales;
        }else{
            commision = (14.5 / 100) * sales;
        }
        break;

        default:
            console.log('error');
            break;
}
if(commision > 0){
console.log(commision.toFixed(2));
}
}
tradeCommission (["Sofia","1500"]);