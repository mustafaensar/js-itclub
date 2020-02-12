let islerim = ["(x) Yataklari düzelt", "(x) Evi süpür", "(x) Camasirlari yika", "(x) Yemegi yap", "(x) Alisverise git", "Cocugu okuldan al"];

let bitirilmis = islerim.filter(WorksSituation.finished);

let bitirilmemis = islerim.filter(WorksSituation.unfinished);

let check = WorksSituation.check(islerim);


output(("<strong>Bitirilmis Isleriniz</strong><br>" + bitirilmis)
+("<br></br>")
+("<strong>Bitirilmemis Isleriniz</strong><br>" + bitirilmemis)
+("<br></br>")
+("<strong>Islerim Bitti mi?</strong><br>" + check)
);

