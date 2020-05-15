/**
 * Maktulleri uretir ve maktullerin adreslerini icinde tutar.
 */
class Victim{
    constructor(pName){
        this.name = pName
        this.addresses = [];
    }

    /**
     * Adresleri array'e gonderir.
     */
    addAddress(pAddress){
        this.addresses.push(pAddress);
    }
}