class CustomerForm{
    constructor(pDisplay){
        this.display = pDisplay;
        this.customerInput = document.querySelector('#customer');
        this.section = document.querySelector('#customer-form');
    }

    /**
     * Musterilerin HTML icerisindeki bir form uzerinden alinmasini saglar.
     */
    getCustomer(){
        return new Customer(this.customerInput.value)
    }
    
}