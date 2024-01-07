function projectCreation(input){
let architectName = input[0];
let projectCount = Number(input[1]);
let totalHours = projectCount * 3;
console.log(`The architect ${architectName} will need ${totalHours} hours to complete ${projectCount} project/s.`)
}

projectCreation(["George", "4"])