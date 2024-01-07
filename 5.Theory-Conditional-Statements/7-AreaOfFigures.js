function areaOfFigures(input){
let shape = input[0];
let area = Number(input[1]);

if(shape === "square") {
    let side = Number(input[1]);
    let area = side * side;
    console.log(area.toFixed(3));
    
} else if (shape === "rectangle") {

    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let area = sideA * sideB;
        console.log(area.toFixed(3));

} else if (shape === "circle") {
    let radius = Number(input[1]);
    let area = Math.PI * Math.pow(radius,2);
    console.log(area.toFixed(3));

} else if (shape === "triangle") {
    let sideLenght = Number(input[1]);
    let heightLenght = Number(input[2]);
    let area = sideLenght * heightLenght / 2;
        console.log(area.toFixed(3));
}
}

areaOfFigures (["square","5"]);