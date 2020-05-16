class VictimForm{
    constructor(pDisplay){
        this.display = pDisplay;
        this.victimInput = document.querySelector('#victim');
        this.section = document.querySelector('#victim-form');
    }

    /**
     * Maktullerin HTML icerisindeki bir form uzerinden alinmasini saglar.
     */
    getVictim(){
        return new Victim(this.victimInput.value)
    }

}