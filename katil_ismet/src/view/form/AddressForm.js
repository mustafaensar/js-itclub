class AddressForm{
    display = true
    constructor(){
        this.streetInput = document.querySelector('#street');
        this.plzInput = document.querySelector('#plz');
        this.ortInput = document.querySelector('#ort');
        this.section = document.querySelector('#address-form');
    }

    /**
     * Adreslerin html formu uzerinden alinmasini saglar.
     */
    getAddress(){
        return new Address(this.streetInput.value, this.plzInput.value, this.ortInput.value)
    }

}