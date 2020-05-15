/**
 * Musterileri uretir ve musterilerin altindaki maktullerin listesini tutar.
 */
class Customer{
    
    constructor(pName){
        this.name = pName;
        this.victims = [];
    }

    /**
     * Maktulleri array'e gonderir.
     */
    addVictim(pVictim){
        this.victims.push(pVictim);
    }
}