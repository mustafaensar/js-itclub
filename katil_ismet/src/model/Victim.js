/**
 * Maktulleri uretir ve maktullerin adreslerini icinde tutar.
 */
class Victim{
    constructor(pName){
        this.name = pName
        this.addresses = [];
    }

    /**
     * Adresleri, maktullerin icinde bir diziye gonderir.
     */
    addAddress(pAddress){
        this.addresses.push(pAddress);
    }
}