/**
 * Musterileri liste halinde ekrana yazdirir.
 */
class CustomerList{
    constructor(){
        this.appName = new Manager().appName
        this.listOfCustomers = document.querySelector('.customers-list');
        this.getCustomers();
        this.customersAddToDom();
    }

    /**
     * Musterileri LocalStorage icinden cagirir.
     */
    getCustomers(pCustomer){
        let customer = new Database(this.appName).getItem(pCustomer);
        return customer;
    }

    /**
     * Musterileri dizi icinde bulur ve listeler.
     */
    customersAddToDom(){
        let customers = this.getCustomers(this.appName) || [];
        const customersName = customers.map(item => item.name);
        for (let index = 0; index < customers.length; index++) {
            this.listOfCustomers.innerHTML += 
            `<li class="listItem">${customersName[index]}</li>`
        }
    }
}

/**
 * Musterilerin listelenecek alanini temsil eder.
 */
class CustomerListView{
    constructor(pDisplay){
        this.display = pDisplay;
        this.section = document.querySelector('.customers');
    }
}