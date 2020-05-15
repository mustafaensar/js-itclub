/**
 * Programin datalarini yonetir.
 */
class Database {
    constructor(appName){
        this.appName = appName;
        this.db = localStorage;
    }

    /**
     * LocalStorage icerisine yeni bir kayit yapilmasini saglar.
     */
    setItem(key, value){
        value = JSON.stringify(value);
        this.db.setItem(key, value);
    }

    /**
     * LocalStorage icerisindeki datayi cagirmamizi saglar.
     */
    getItem(key){   
        const data = this.db.getItem(key);
        return JSON.parse(data);
    }

    /**
     * LocalStorage icerisine guncelleyerek ekleme yapmamizi saglar.
     */
    saveCustomer(pCustomer){
        let list = this.getItem(this.appName) || [];
        list = list.filter(customer => customer.name !== pCustomer.name);
        list.push(pCustomer);
        this.setItem(this.appName, list);
    }

    deleteCustomer(pCustomer){
        let list = this.getItem(this.appName) || [];
        list = list.filter(customer => customer.name !== pCustomer.name);
        list.push(pCustomer);
        this.setItem(this.appName, list);
    }
}