class AddressForm{
    constructor(pDisplay){
        this.display = pDisplay
        this.streetInput = document.querySelector('#street');
        this.plzInput = document.querySelector('#plz');
        this.ortInput = document.querySelector('#ort');
        this.section = document.querySelector('#address-form');
    }

    /**
     * Adreslerin HTML icerisindeki bir form uzerinden alinmasini saglar.
     */
    getAddress(){
        return new Address(this.streetInput.value, this.plzInput.value, this.ortInput.value)
    }

}