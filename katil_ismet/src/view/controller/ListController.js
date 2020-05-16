class ListController{
    constructor(){
        this.appName = new Manager().appName
        this.db = new Database(this.appName);
        this.listOfCustomers = document.querySelector('.customers-list');
        this.listOfVictims = document.querySelector('.victims-list');
        this.listOfAddress = document.querySelector('.address-list');
        this.customersAddToDom();
    }

    customersAddToDom(){
        let customers = new CustomerList().getCustomers(this.appName);
        const customersName = customers.map(item => item.name);
        for (let index = 0; index < customers.length; index++) {
            this.listOfCustomers.innerHTML += `<li>${customersName[index]}</li>`
        }
        
        /*for (let index = 0; index < customers.length; index++) {
            this.listOfCustomers.innerHTML += `<li>${customers[index]}</li>`
        }*/
    }
}