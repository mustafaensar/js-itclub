/**
 * Adresleri liste halinde ekrana yazdirir.
 */
class AddressList{
    constructor(){
        this.appName = new Manager().appName
        this.listOfAddress = document.querySelector('.addresses-list');
        this.getAddress();
        this.addressesAddToDom();
    }

    /**
     * Adresleri LocalStorage icinden cagirir.
     */
    getAddress(pCustomer){
        let array = new Database(this.appName).getItem(pCustomer);
        return array;
    }

    /**
     * Adresleri dizi icinde bulur ve listeler.
     */
    addressesAddToDom(){
        let array = this.getAddress(this.appName) || [];
        const street = array.map(customer => customer.victims.map(victim => victim.addresses.map(address => address.street)));
        const plz = array.map(customer => customer.victims.map(victim => victim.addresses.map(address => address.plz)));
        const ort = array.map(customer => customer.victims.map(victim => victim.addresses.map(address => address.ort)));
        for (let index = 0; index < array.length; index++) {
            this.listOfAddress.innerHTML += 
            `<li class="listItem">${street[index]} / ${plz[index]} / ${ort[index]}</li>`
        }
    }
}

/**
 * Adreslerin listelenecek alanini temsil eder.
 */
class AddressListView{
    constructor(pDisplay){
        this.display = pDisplay;
        this.section = document.querySelector('.addresses');
    }
}