class VictimForm{
    display = true
    constructor(){
        this.victimInput = document.querySelector('#victim');
        this.section = document.querySelector('#victim-form');
    }

    /**
     * Maktullerin html formu uzerinden alinmasini saglar.
     */
    getVictim(){
        return new Victim(this.victimInput.value)
    }

}