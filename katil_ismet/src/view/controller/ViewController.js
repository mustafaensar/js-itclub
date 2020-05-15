/**
 * Elemanlarin gorunumunu duzenler.
 */
class ViewController{
    constructor(form){
        this.form = form;
        this.display();
    }

    /**
     * Gelen elemanin boolean degerine gore gorunumunu ayarlayan metodu cagirir.
     */
    display(){
        this.form.display ? this.show() : this.hide();
    }

    /**
     * Elemanin gosterilmesini saglar.
     */
    show(){
        this.form.section.style.display = '';
    }

    /**
     * Elemanin gizlenmesini saglar.
     */
    hide(){
        this.form.section.style.display = 'none';
    }
}