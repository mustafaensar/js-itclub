/**
 * Musterileri uretir ve musterilerin altindaki maktullerin listesini tutar.
 */
class Customer{
    
    constructor(pName){
        this.name = pName;
        this.victims = [];
    }

    /**
     * Maktulleri, musterilerin icinde bir diziye gonderir.
     */
    addVictim(pVictim){
        this.victims.push(pVictim);
    }
}