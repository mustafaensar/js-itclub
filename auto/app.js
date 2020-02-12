/* PROBLEM
Salih bey, büyük bir oto galerisine sahiptir ve online bir sistem üzerinden arabalarini satisa sunmaktadir.
Online sistemin ise arama ve filtreleme özellikleri daha olusturulmadigi icin Salih bey online sistemi müsterilerine acamamaktadir.
Sizden istegimiz online sistemin ihtiyaci olan asagidaki fonksiyonlari acilen yazmanizdir.

0) Araba karakteri tasimayan arabalari;) filtreleyiniz.
1) Icinde "o" harfi gecen arabalari ve bu arabalarin sayisini bulun.
2) Icinde iki defa "o" harfi gecen arabalarin sayisini bulun.
3) Araba isim uzunlugu 5 'den kücük olan arabalari listeleyin.
4) Ilk harfi "f" olan arabalarin son harfini x olarak degistirin.
5) Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde "a" harfi olanlari,
isimlerinin önüne "my favorite" gelecek sekilde degistirin ve lsiteleyin.
6) Ismi icinde "o" ve "a" gecen arabalari toplam karakter sayisini bulunuz.
7) Ismi icinde "o" veya "i" gecen arabalari toplam karakter sayisini bulunuz.
8) find() methodu ile filter() method arasindaki farklari yazin. */

let cars = ["audi", "bmw", "ford", "opel", "fiat", "honda", "toyota", "renault", 
"tesla", "volvo", "skoda", "nissan", "ferrari", "vw", "alfa romeo", "mitsubishi", "TOGG;)"];

let realCars = other(cars);

let includingCharO = filterIncludingCharO(cars);

let includingTwoTimesCharO = findincludingTwoTimesCharO(realCars);

let lessThanFiveCars = filterLessThanFive(cars);

let changedName = changedNameOfCars(cars);

let myFavourite = myFavouriteCars(cars);

let includingCharOA = filterIncludingCharOA(cars);

let includingCharOI = filterIncludingCharOI(cars);

let findMethod = "find() kullanarak icinde x => x.includes('m') dedigimizde<br>bize icinde 'm' harfi gecen ilk elemani buluyor.<br>" + cars.find(x => x.includes("m")); 

let filterMethod = "<br><br>filter() kullanarak icinde x => x.includes('m') dedigimizde<br>bize icinde 'm' harfi gecen elemanarin hepsini buluyor.<br>" + cars.filter(x => x.includes("m")); 

output(
("<strong>Araba karakteri tasimayan ';)' arabalari filtreleyiniz.</strong><br>" + realCars)
+("<br><br>")
+("<strong>Icinde 'o' harfi gecen arabalar</strong><br>" + includingCharO)
+("<br><br>")
+("<strong>Bu arabalarin sayisi</strong><br>" + includingCharO.length)
+("<br><br>")
+("<strong>Icinde iki defa 'o' harfi gecen arabalarin sayisi</strong><br>" + includingTwoTimesCharO.length)
+("<br><br>")
+("<strong>Araba isim uzunlugu 5'den kücük olan arabalar</strong><br>" + lessThanFiveCars)
+("<br><br>")
+("<strong>Ilk harfi 'f' olan arabalarin son harfini 'x' olarak degistir</strong><br>" + changedName)
+("<br><br>")
+("<strong>Uzunlugu 3 ile 6 arasinda olan arabalardan isminin icinde 'a' harfi olanlari, isimlerinin önüne 'my favorite' gelecek sekilde degistir</strong><br>" + myFavourite)
+("<br><br>")
+("<strong>Ismi icinde 'o' ve 'a' gecen arabalar ve arabalarin toplam karakter sayisi.</strong><br>" + includingCharOA)
+("<br><br>")
+("<strong>Ismi icinde 'o' veya 'i' gecen arabalar ve arabalarin toplam karakter sayisi.</strong><br>" + includingCharOI)
+("<br><br>")
+("<strong>find() methodu ile filter() method arasindaki farklar</strong><br>" + findMethod + filterMethod + "<br><br>Ayrica find() IE'da calisma problemi yasarken, filter() butun browserlar icin uygundur.")
)
