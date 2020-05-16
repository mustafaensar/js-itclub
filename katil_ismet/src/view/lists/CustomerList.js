/**
 * Musterileri liste halinde ekrana yazdirir.
 */
class CustomerList{
    constructor(){
        this.appName = new Manager().appName
        this.getCustomers();
    }

    getCustomers(pCustomer){
        let customer = new Database(this.appName).getItem(pCustomer);
        return customer;
    }
}