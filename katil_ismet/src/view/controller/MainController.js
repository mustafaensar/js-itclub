class MainController{
    constructor(){
        this.appName = new Manager().appName
        this.db = new Database(this.appName);
        this.customer = null;
        this.victim = null;
        this.submitCustomer = document.querySelector('#submitCustomer');
        this.submitVictim = document.querySelector('#submitVictim');
        this.submitAddress = document.querySelector('#submitAddress');
        this.setListeners();
    }

    /**
     * Form butonlarina event ekler ve form bilgilerinin kaydedilmesini saglar.
     */
    setListeners() {
        this.submitCustomer.addEventListener('click', ()=>{
            this.customer = new CustomerForm().getCustomer();
            this.db.saveCustomer(this.customer);
        })
        this.submitVictim.addEventListener('click', ()=>{
            this.victim = new VictimForm().getVictim();
            this.customer.addVictim(this.victim);
            this.db.saveCustomer(this.customer);
        })
        this.submitAddress.addEventListener('click', ()=>{
            this.victim.addAddress(new AddressForm().getAddress());
            this.db.saveCustomer(this.customer);
        })
    }

}