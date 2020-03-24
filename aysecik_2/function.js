class Aysecik{

  constructor(){
   this.number = document.querySelector('#number');
   this.howManyNumbers = document.querySelector('#howManyNumbers');
   this.numbers = document.querySelector('#numbers');
   this.total = document.querySelector('#resultOfAddition');
   this.multiplicationResult = document.querySelector('#resultOfMultiplication');
   this.averageResult = document.querySelector('#resultOfAverage');
   this.maxNumber = document.querySelector('#maxNumber');
   this.minNumber = document.querySelector('#minNumber');
   this.myArray = []
  }

  mapper(){
    return {'zero': 0,'one': 1,'two': 2,'three': 3,'four': 4,
    'five': 5,'six': 6,'seven': 7,'eight': 8,'nine': 9,'ten': 10,
    'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15};
  }

  getLowerCase(){
    return this.number.value.trim().toLowerCase();
  }

  getConvertToNumber(pNumber){
    const mapper = this.mapper();
    return mapper[pNumber];
  }

  /* TODO : This part can be use later. Not needed right now.
    convertToString(pNumber){
    const mapper = this.mapper();
    return Object.keys(mapper).find(key => mapper[key] === pNumber);
  } 
  */

  getReady(){
    const values = this.getLowerCase();
    const numbers = this.getConvertToNumber(values)
    return numbers;
  }

  added(){
    this.myArray.push(this.getReady());
    const numbers = this.myArray;
    this.numbers.innerHTML = numbers;
    return this.myArray;
  }

  getSumOfNumbers(){
    return this.myArray.reduce((a, b) => a + b)
  }

  getMultiplicationOfNumbers(){
    return this.myArray.reduce((a, b) => a * b)
  }

  avarageOfNumbers(){
    return (this.getSumOfNumbers() / this.myArray.length)
  }

  maxOfNumbers(){
    return Math.max(...this.myArray);
  }

  minOfNumbers(){
    return Math.min(...this.myArray);
  }

  print(){
      const numbers = this.myArray;
      const howManyNumbers = this.myArray.length;
      const total = this.getSumOfNumbers();
      const multiplication = this.getMultiplicationOfNumbers();
      const average = this.avarageOfNumbers();
      const max = this.maxOfNumbers();
      const min = this.minOfNumbers();

      this.numbers.innerHTML = numbers;
      this.howManyNumbers.innerHTML = howManyNumbers;
      this.total.innerHTML = total;
      this.multiplicationResult.innerHTML = multiplication;
      this.averageResult.innerHTML = average;
      this.maxNumber.innerHTML = max;
      this.minNumber.innerHTML = min;
  }

  check(){
    
    const inputElement = document.getElementById('number');
    const y = this.getConvertToNumber(inputElement.value);
    const message = document.getElementById('error');

    try {
      if(inputElement == '') { throw 'EMPTY !!!';}
      if(isNaN(y)) { throw 'Enter the number as text <br> Between 0 - 15';}
    } catch (err) {
      message.innerHTML = 'HEEEEEY <br>' + err;
      document.getElementById('number').value = '';
      return false;
    }
    return true
  }

}