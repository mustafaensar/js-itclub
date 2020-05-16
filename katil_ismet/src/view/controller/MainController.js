/**
 * Buton eventlerini ayarlar.
 */
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
     * Form butonlarina event ekler ve form bilgilerinin kaydedip goruntulenecek ogeyi cagirir.
     */
    setListeners() {
        this.submitCustomer.addEventListener('click', ()=>{
            if (document.querySelector('#customer').value == '') {
                swal("ERROR", "Please Enter Customer's Name")
            }else{
                this.customer = new CustomerForm().getCustomer();
                this.db.saveCustomer(this.customer);
                new ViewController(new CustomerListView(false))
                new ViewController(new VictimListView(true))
                new ViewController(new VictimForm(true))
                new ViewController(new CustomerForm(false))
            }
            
        })
        this.submitVictim.addEventListener('click', ()=>{
            if (document.querySelector('#victim').value == '') {
                swal("ERROR", "Please Enter Victim's Name")
            }else{
                this.victim = new VictimForm().getVictim();
                this.customer.addVictim(this.victim);
                this.db.saveCustomer(this.customer);
                new ViewController(new VictimListView(false))
                new ViewController(new AddressListView(true))
                new ViewController(new AddressForm(true))
                new ViewController(new VictimForm(false))
            }
        })
        this.submitAddress.addEventListener('click', ()=>{
            if (document.querySelector('#street').value == '' ||
                document.querySelector('#plz').value == '' ||
                document.querySelector('#ort').value == '') {
                swal("ERROR", "Please Chcek The Address")
            }else{
                this.victim.addAddress(new AddressForm().getAddress());
                this.db.saveCustomer(this.customer);
                new ViewController(new CustomerListView(true))
                new ViewController(new VictimListView(false))
                new ViewController(new VictimForm(false))
                new ViewController(new CustomerForm(true))
                new ViewController(new AddressForm(false))
                location.reload();
            }
        })
    }

}