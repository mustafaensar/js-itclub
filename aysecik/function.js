class Functions {

  static textToNumber(text) {
    if (text == "one") {
      return 1
    }
    if (text == "two"){
      return 2
    }
    if (text == "three"){
      return 3
    }
    if (text == "four"){
      return 4
    }
    if (text == "five"){
      return 5
    }
    if (text == "six"){
      return 6
    }
    if (text == "seven"){
      return 7
    }
    if (text == "eight"){
      return 8
    }
    if (text == "nine"){
      return 9
    }
    if (text == "ten"){
      return 10
    }
  }

  static numberToText(number) {
    if (number == 1) {
      return "one"
    }
    if (number == 2){
      return "two"
    }
    if (number == 3){
      return "three"
    }
    if (number == 4){
      return "four"
    }
    if (number == 5){
      return "five"
    }
    if (number == 6){
      return "six"
    }
    if (number == 7){
      return "seven"
    }
    if (number == 8){
      return "eight"
    }
    if (number == 9){
      return "nine"
    }
    if (number == 10){
      return "ten"
    }
  }

  static calculate(a, b) {
    const x = Functions.textToNumber(a);
    const y = Functions.textToNumber(b);
    if ((0 < x < 11) && (0 < y < 11)) {
      const answer = (x - y);
      return Functions.numberToText(answer);
    }
  }

}