function aquarium(input) {
let lenght = Number (input[0]);
let width = Number (input[1]);
let height = Number (input[2]);
let percent = Number (input[3]);

let aquariumVolume = lenght * width * height;
let lVolume = aquariumVolume * 0.001;
let occupiedSpace = percent / 100;
let neededL = lVolume * (1 - occßßupiedSpace);

console.log(neededL);
}

aquarium (["85","75","47","17"]);