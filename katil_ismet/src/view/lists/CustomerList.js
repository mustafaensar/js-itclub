/**
 * Musterileri liste halinde ekrana yazdirir.
 */
class CustomerList{
    constructor(){
        this.appName = new Database().appName;
        this.getCustomers();
        console.log(this.getCustomers());
                
    }

    getCustomers(){
        new Database().getItem(this.appName);
    }
}