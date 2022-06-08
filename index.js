const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
  return (element += accumulator);
}, 0);
console.log(totalBatteries);

function reducer(array) {
  let totalBatteries = 0;
  return totalBatteries;
}
