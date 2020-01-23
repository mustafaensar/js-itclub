let arrayone = ["cat", "dog", "fish", "snake", "bird"];

let arraytwo = ["cat", "fish", "elephant", "bird"];


/* BIRINCI ARRAY DEKI ELEMANLARI FILTRELEMEK ICIN filter METODU
IKINCI ARRAYDEKI ELEMANLARDAN AYNI OLANLARI TRUE DÖNDÜREN includes
METODU KULLANILDI */

let same = arrayone.filter(Element => arraytwo.includes(Element))



/* IKI ARRAY UZERINDE DE GEZDIGIMIZDE AYNI OLAN DEGERLER ICIN
FARKLI BIR ARRAY E push METODU ILE ELEMANLAR EKLENDI */

let sametwo = []

for (let i = 0; i < arrayone.length ; i++)
for (let x = 0; x < arraytwo.length; x++ )
{
    if (arrayone[i] === arraytwo[x]) {
    sametwo.push(arrayone[i])
    };
    
}

console.log(same)
console.log(sametwo)