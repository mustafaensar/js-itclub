function other(auto){
  const other = auto.filter(x => !x.includes(";)"));
  return other;
}


function filterIncludingCharO(auto){
  const includingChar = auto.filter(x => x.includes("o"));
  return includingChar;
}


function findNumberOfChars(text, characters){
  const newArray = text.split("")
  const Chars = newArray.filter(function(harf){
    if(harf == characters){
        return true;
    }
        return false;

  });
        return Chars.length;
}


function findincludingTwoTimesCharO(car){
  const TwoTimesCharO = car.filter(function(auto){
  const numberOfOs = findNumberOfChars(auto, "o");
  if(numberOfOs == 2){
      return true;
  }
  return false;
});return TwoTimesCharO;}


function filterLessThanFive(auto){
  const findLessThanFive = auto.filter(x => x.length < 5 );
  return findLessThanFive;
}

function changedNameOfCars(auto){
  const findStartWithF = auto.filter(x => x.startsWith("f"));
  const addEveryOneX = (findStartWithF.map(x => x.slice(0, -1).concat("x")))
  return addEveryOneX;
}

function myFavouriteCars(auto){
  const includingA = auto.filter(x => (3 < x.length < 6) && x.includes("a"));
  const favori = includingA.map(x => "my favorite " + x);
  return favori;
}

function filterIncludingCharOA(auto){
  const findIncludingCharOA = auto.filter(x => x.includes("o") && x.includes("a"));
  const length = findIncludingCharOA.map(x => x.length)
  return findIncludingCharOA + "<br><strong>karakter sayilari: </strong> " +length;
}

function filterIncludingCharOI(auto){
  const findIncludingCharOI = auto.filter(x => x.includes("o") || x.includes("i"));
  const length = findIncludingCharOI.map(x => x.length)
  return findIncludingCharOI + "<br><strong>karakter sayilari: </strong> " +length;
}