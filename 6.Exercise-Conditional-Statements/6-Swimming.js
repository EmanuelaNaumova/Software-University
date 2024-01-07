function swimming (input) {
   let record = Number(input[0]);
   let distanceMet = Number(input[1]);
   let timePer1MinSec = Number(input[2]);

   let ivansTime = distanceMet * timePer1MinSec;
   let additionalTimeM = Math.floor(distanceMet / 15);
   let finalAddTime = additionalTimeM * 12.5;

   let ivansFinalTime = ivansTime + finalAddTime;

   if (ivansFinalTime >= record) {
    let timeNeeded = ivansFinalTime - record;
      console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
   }else {
      console.log(`Yes, he succeeded! The new world record is ${ivansFinalTime.toFixed(2)} seconds.`);
   }
}
swimming (["10464","1500","20"]);