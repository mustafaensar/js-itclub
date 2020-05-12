/**
 * Programi yonetir.
 */
class Manager{
    constructor(){
        this.appName = 'katil';
        this.db = new DBManager(this.appName);
        this.setViews();
    }

    /**
     * Ekranda gorunumunu duzenler
     */
    setViews(){
        this.views = {
            customers: new CustomerView(this),
        }
    }
}

const manager = new Manager();