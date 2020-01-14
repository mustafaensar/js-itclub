

let array = [1, 8, 20, 33, 58, 67, 72];
let total = 0;

for (let x = 0 ; x < array.length; x++) {
    total += array[x];
}

let average = (total / array.length);

for (let odd=1; odd < array.length; odd++) {
    if(odd % 2 !== 0) {
      console.log("Odd Numbers", odd)
    }
}

console.log("Average", average)
console.log("Max", Math.max(...array))
console.log("Min", Math.min(...array))

