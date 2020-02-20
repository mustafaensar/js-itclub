function NumberToText(sayi) {

  const part1 = ['', 'bir ', 'iki ', 'üç ', 'dört ', 'beş ', 'altı ', 'yedi ', 'sekiz ', 'dokuz '];
  const part2 = ['', 'on ', 'yirmi ', 'otuz ', 'kırk ', 'elli ', 'altmış ', 'yetmiş ', 'seksen ', 'doksan '];
  const part3 = ['', 'yüz ', 'bin ', 'milyon ', 'milyar ', 'trilyon ', 'katrilyon '];

  const strng = String(sayi);
  if (strng.length == 1) {
    return birler(sayi)
  }
  if (strng.length == 2) {
    return onlar(sayi)
  }
  if (strng.length == 3) {
    return yuzler(sayi)
  }
  if (strng.length == 4) {
    return binler(sayi)
  }
  if (strng.length == 5) {
    return onbinler(sayi)
  }
  if (strng.length == 6) {
    return yuzbinler(sayi)
  }
  if (strng.length == 7) {
    return milyonlar(sayi)
  }
  if (strng.length == 8) {
    return onmilyonlar(sayi)
  }
  if (strng.length == 9) {
    return yuzmilyonlar(sayi)
  }
  if (strng.length == 10) {
    return milyarlar(sayi)
  }
  if (strng.length >= 11) {
    return 'Sayiniz 10 Basamaktan Fazla Olamaz'
  }


  function birler(sayi) {
    const strngFunction = String(sayi);
    if (strngFunction.length == 1) {
      return part1[sayi];
    }
  }


  function onlar(sayi) {
    const strngFunction = String(sayi);
    if (strngFunction.length == 2) {
      if (strngFunction.slice(0, 1) == 0){
        return birler(strngFunction.slice(1, 2))
      }
        return part2[strngFunction.slice(0, 1)] + part1[strngFunction.slice(1, 2)];
    }
  }


  function yuzler(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 3) {
      if (strngFunction.slice(0, 1) == 1) {
        return part3[1] + ' ' + onlar(strngFunction.slice(1, 3))
      }
      if (strngFunction.slice(0, 1) == 0) {
        return onlar(strngFunction.slice(1, 3));
      }
        return part1[strngFunction.slice(0, 1)] + part3[1] + ' ' + part2[strngFunction.slice(1, 2)] + part1[strngFunction.slice(2, 3)];
    }
  }
    
  function binler(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 4) {
      if (strngFunction.slice(0, 1) == 1){
        return part3[2] + ' ' + yuzler(strngFunction.slice(1, 4));
      }
      if (strngFunction.slice(0, 1) == 0){
        return yuzler(strngFunction.slice(1, 4))
      }
        return birler(strngFunction.slice(0, 1)) + part3[2] + ' ' + yuzler(strngFunction.slice(1, 4));
    }
  }
    

  function onbinler(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 5) {
      if (strngFunction.slice(0, 1) == 0){
        return binler(strngFunction.slice(1, 5))
      }
        return onlar(strngFunction.slice(0, 2)) + part3[2] + ' ' + yuzler(strngFunction.slice(2, 5));
    }
  }
    

  function yuzbinler(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 6){
      if (strngFunction.slice(0, 1) == 0){
        return onbinler(strngFunction.slice(1, 6))
      }
        return yuzler(strngFunction.slice(0, 3)) + part3[2] + ' ' + yuzler(strngFunction.slice(3, 6));
    }
  }


  function milyonlar(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 7){
      if (strngFunction.slice(0, 1) == 0){
        return yuzbinler(strngFunction.slice(1, 7));
      }
        return birler(strngFunction.slice(0, 1)) + part3[3] + ' ' + yuzbinler(strngFunction.slice(1, 7));
    }
  }

  function onmilyonlar(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 8){
      if (strngFunction.slice(0, 1) == 0){
        return milyonlar(strngFunction.slice(1, 8));
      }
        return onlar(strngFunction.slice(0, 2)) + part3[3] + ' ' + yuzbinler(strngFunction.slice(2, 8));
    }
  }
  
  function yuzmilyonlar(sayi){
    const strngFunction = String(sayi);
    if (strngFunction.length == 9){
      if (strngFunction.slice(0, 1) == 0){
        return onmilyonlar(strngFunction.slice(1, 9))
      }
        return yuzler(strngFunction.slice(0, 3)) + part3[3] + ' ' + yuzbinler(strngFunction.slice(3, 9));
    }
  }  
  
  function milyarlar(sayi){
    const strngFunction = String(sayi);{
      if (strngFunction.length == 10){
        return birler(strngFunction.slice(0, 1)) + part3[4] + ' ' + yuzmilyonlar(strngFunction.slice(1, 10));
      }
    }
  }
}