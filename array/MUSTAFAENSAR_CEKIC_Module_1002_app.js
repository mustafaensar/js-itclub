let array = [1, 8, 20, 33, 58, 67, 72];
let total = 0;

for (let x = 0; x < array.length; x++) { //ortalama icin once toplama
    total += array[x];
}

let average = (total / array.length); //ortalama

console.log("Average", average)
console.log("Max", Math.max(...array)) //maksimun deger
console.log("Min", Math.min(...array)) //minimum deger

// ilk basta if(odd % 2 !== 0) yazdigimda bana kacinci sayi oldugunu gösterdi, bi 10 dk düsündüm :) :) :)


//iki farklicözüm

for (let odd = 0; odd < array.length; odd++) {
    if(array[odd] % 2 !== 0) {
      console.log("Odd Numbers", array[odd]) //tek sayilar
    }
}

let counter = 0
let tt = []
for (let i=0; i < array.length; i++){
  if (array[i] & 1) {
    tt[counter++] = array[i];
  }
}

console.log(tt)