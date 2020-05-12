class CustomerView{
    constructor(manager){
        this.manager = manager;
        this.customerList = document.querySelector('.customer-list');
        this.formbutton = document.querySelector('#get-form');
        this.form = document.querySelector('.form');
        this.showCustomers();
    }

    /**
     * Musterilerin isimlerini ekranda butonlar olarak gosterir.
     */
    showCustomers(){
        const customers = [];
        const array = this.manager.db.getItem('katil').missions;
        array.map(item => customers.push(item.customer));
        for (let index = 0; index < customers.length; index++) {
            this.customerList.innerHTML +=
            `<input type="button" class="customers" value="${customers[index]}">`
        }
    }
}