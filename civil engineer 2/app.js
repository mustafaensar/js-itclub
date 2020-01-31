let dikdortgenOlanlar = [7,5,2,8,10,20,7,21,12,10,6];

let daireOlanlar = [6,23,19,0,200,156];

let kupHacimleri = [2,6,1,4,13, -1];

let DikdortgenlerinAlanlari = []

let DairelerinAlanlari = []

let KuplerinHacimleri = []


for (let index = 0; index < dikdortgenOlanlar.length - 1; index++) {
    DikdortgenlerinAlanlari.push(DortgenAlan(dikdortgenOlanlar[index], dikdortgenOlanlar[index+1]));
    index = index+1
}

console.log("Dikdortgenlerin Alanlari", DikdortgenlerinAlanlari);


for (let index = 0; index < daireOlanlar.length; index++) {
    DairelerinAlanlari.push(DaireAlan(daireOlanlar[index]));
}

console.log("Dairelerin Alanlari", DairelerinAlanlari);

for (let index = 0; index < kupHacimleri.length; index++) {
    if (kupHacimleri[index] > 0 ) {
    KuplerinHacimleri.push(KupHacim(kupHacimleri[index]));
    }
}

console.log("Kuplerin Hacimleri", KuplerinHacimleri);