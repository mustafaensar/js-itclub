/**
 * Elemanlarin gorunumunu boolean degerine gore duzenler.
 */
class ViewController{
    constructor(element){
        this.element = element;
        this.display();
    }

    /**
     * Gelen elemanin boolean degerine gore goruntu durumunu ayarlayan metodu cagirir.
     */
    display(){
        this.element.display ? this.show() : this.hide();
    }

    /**
     * Eleman true ise gosterilmesini saglar.
     */
    show(){
        this.element.section.style.display = '';
    }

    /**
     * Eleman false ise gizlenmesini saglar.
     */
    hide(){
        this.element.section.style.display = 'none';
    }
}