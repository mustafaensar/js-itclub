class CustomerForm{
    display = true
    constructor(){
        this.customerInput = document.querySelector('#customer');
        this.section = document.querySelector('#customer-form');
    }

    /**
     * Musterilerin html formu uzerinden alinmasini saglar.
     */
    getCustomer(){
        return new Customer(this.customerInput.value)
    }
    
}