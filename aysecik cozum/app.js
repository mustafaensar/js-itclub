class Aysecik{
    /*
      constructor initial method, can be used to provide default value for the object
    */
    constructor(top = 10){
        this.top = top;
        this.sayi = document.querySelector('#sayi');
        this.result = document.querySelector('#result');
    }


    mapper(){
        const map = {'sifir': 0,'bir': 1,'iki': 2,'üc': 3,'dort': 4,
        'bes': 5,'alti': 6,'yedi': 7,'sekiz': 8,'dokuz': 9,'on': 10};
        return map;
    }

    mapToNumber(rakam){
        const mapper = this.mapper();
        return mapper[rakam];
    }

    mapToString(rakam){
        const mapper = this.mapper();

        //  return ['sifir', 'bir', 'iki'].find(a => 0 == 0)
        return Object.keys(mapper).find(key => mapper[key] === rakam);
    }

    validate(){
        let value = this.getValue();
        const mapper = this.mapper();

        if(mapper[value]){
            return true;
        }
        return false;
    }

    getValue(){
       return this.sayi.value.trim('').toLowerCase();
    }

    yazdir(){
      if(this.validate()){
        const number = this.hesapla(); // iki
        this.result.innerHTML = number;
      } else{
        this.result.innerHTML = 'Lutfen gecerli bir deger giriniz.';
      }
      
    }

    hesapla(){
      const givenValue = this.getValue(); // sekiz
      const number = this.mapToNumber(givenValue); // 8
      const resultAsNumber = this.top - number; // 2
      return this.mapToString(resultAsNumber); // iki
    }
}

const manager = new Aysecik();

const button = document.querySelector('#calculate');
button.addEventListener('click', function(){
    manager.yazdir();
}, false);



/*
memory representaion:
const ahmet = new Aysecik(100);


manager
100 top --> 10

105 button -->

109

----------------

ahmet.top --> 100

1200 top -->

1205 button -->

1209
*/