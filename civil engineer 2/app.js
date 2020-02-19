let dikdortgenOlanlar = [7,5,2,8,10,20,7,21,12,10,6];

let daireOlanlar = [6,23,19,0,200,156];

let kupHacimleri = [2,6,1,4,13,-1];

let DikdortgenlerinAlanlari = []

let DairelerinAlanlari = Calculation.DaireAlan(daireOlanlar)

let KuplerinHacimleri = Calculation.KupHacim(kupHacimleri)

for (let index = 0; index < dikdortgenOlanlar.length - 1; index++) {
    DikdortgenlerinAlanlari.push(Calculation.DortgenAlan(dikdortgenOlanlar[index], dikdortgenOlanlar[index+1]));
    index = index+1
}


output(("Dikdortgenlerin Alanlari<br>" + DikdortgenlerinAlanlari)
+("<br></br>")
+("Dairelerin Alanlari<br>" + DairelerinAlanlari)
+("<br></br>")
+("Kuplerin Hacimleri<br>" + KuplerinHacimleri)
)