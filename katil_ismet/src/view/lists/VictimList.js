/**
 * Maktulleri liste halinde ekrana yazdirir.
 */
class VictimList{
    constructor(){
        this.appName = new Manager().appName
        this.listOfVictims = document.querySelector('.victims-list');
        this.getVictims();
        this.victimsAddToDom();
    }

    /**
     * Program datasini LocalStorage icinden cagirir.
     */
    getVictims(pCustomer){
        let array = new Database(this.appName).getItem(pCustomer);
        return array;
    }

    /**
     * Maktulleri dizi icinde bulur ve listeler.
     */
    victimsAddToDom(){
        let array = this.getVictims(this.appName) || [];
        const victimsName = array.map(customer => customer.victims.map(victim => victim.name));
        for (let index = 0; index < array.length; index++) {
            this.listOfVictims.innerHTML += 
            `<li class="listItem">${victimsName[index]}</li>`
        }
    }
}

/**
 * Maktullerin listelenecek alanini temsil eder.
 */
class VictimListView{
    constructor(pDisplay){
        this.display = pDisplay;
        this.section = document.querySelector('.victims');
    }

    
}