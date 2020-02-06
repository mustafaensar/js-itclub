let islerim = ["Yataklari düzelt", "(x) Evi süpür", "(x) Camasirlari yika", "Yemegi yap", "(x) Alisverise git", "Cocugu okuldan al"];

let bitirilmis = [];
let bitirilmemis = [];


bitirilmis.push(finished(islerim));

bitirilmemis.push(unfinished(islerim));

console.log("Bitirilmis Isleriniz", bitirilmis);

console.log("Bitirilmemis Isleriniz", bitirilmemis);

if (check(islerim)){
    console.log("BITTI")
}else {
    console.log("BITMEDI")
}