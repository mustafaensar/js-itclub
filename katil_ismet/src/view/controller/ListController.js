class ListController{
    constructor(){
        this.listOfCustomers = document.querySelector('.customers-list');
        this.listOfVictims = document.querySelector('.victims-list');
        this.listOfAddress = document.querySelector('.address-list');
        this.customersAddToDom();
    }

    customersAddToDom(){
        let customers = new CustomerList().getCustomers();
        for (let index = 0; index < customers.length; index++) {
            this.listOfCustomers.innerHTML += `<li>${customers[index]}</li>`
        }
    }
}