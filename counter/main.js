let altlimit = 1
let ustlimit = 150
let sayi = 0
let a = 7;
let b = 5;

for (let altlimit = 1; altlimit < ustlimit; ++altlimit) {
    if ((altlimit % a == 0) && (altlimit % b == 0)) {
        sayi = sayi + altlimit;
        console.log("your numbers", altlimit)
        console.log("total", sayi)
    }
}

