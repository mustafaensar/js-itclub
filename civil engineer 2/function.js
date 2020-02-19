class Calculation {

  static DaireAlan(x) {
    const daire = x
                    .map(r => Math.round(Math.PI) * Math.pow(r, 2));
    return daire;
  }

  static DortgenAlan(a, b) {
    let sonuc = (a * b);
    return sonuc;
  } 

  static KupHacim(x) {
    const kup = x
                  .filter(a => a > 0)
                  .map(a => Math.pow(a, 3));
    return kup;
  }

}