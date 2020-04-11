class Person {
    constructor(fname, surname, kanton) {
        this.fname = fname
        this.surname = surname;
        this.kanton = kanton;
    };
}

class Manager {
    constructor() {
        this.button = document.querySelector('input[type="button"]');
        this.form = document.querySelector('form[name="informations"]');
        this.nameId = document.querySelector('#fname');
        this.surnameId = document.querySelector('#surname');
        this.tableContainer = document.querySelector('.tableContainer');
        this.search = document.querySelector('.search');
        this.people = [];
        this.filteredPeople = [];
        this.sortType = 'desc';
        this.setListeners();
    }

    /**
     * Bu metod ile click ve keyup durumunda hangi metodun calisacagi ayarlaniyor.
     */
    setListeners() {
        this.button.addEventListener('click', this.getInfo.bind(this));
        this.tableContainer.addEventListener('click', this.catchEvents.bind(this));
        this.search.addEventListener('keyup', this.filterTable.bind(this));
    }

    /**
     * Bu metod sayesinde filtrelenen elemanlar render ediliyor.
     */
    filterTable(e){
        const word = e.target.value;
        this.filteredPeople = this.people.filter(item => {
          if(item.fname.indexOf(word) > -1 ||
          item.surname.indexOf(word) > -1 ||
          item.kanton.indexOf(word) > -1) {
            return true;
          }
          return false;
        });
        this.renderTable(this.filteredPeople);
    }

    /**
     * Bu metod ile hangi basliga tiklanilirsa ona gore listeleme yapiliyor.
     */
    catchEvents(e){
        const item = Array.from(e.target.classList);
        if(item.includes('fname')){
          this.sortBy('fname');
        }
    
        if(item.includes('surname')){
          this.sortBy('surname');
        }
    
        if(item.includes('kanton')){
          this.sortBy('kanton');
        }
    }

    /**
     * Bu metod elemanlarin alfabetik olarak siralamasini yapiyor.
     */
    sortBy(element){
        const people = this.filteredPeople.length ? this.filteredPeople : this.people;
        if(this.sortType === 'asc'){
          people.sort((a,b)=> { return a[element] < b[element] ? -1: 1});
          this.sortType = 'desc';
        } else {
          people.sort((a,b)=> { return a[element] > b[element] ? -1: 1});
          this.sortType = 'asc';
        }
    
        this.renderTable(people);
    }

    /**
     * Bu metod yazilan bilgileri data yapisina gonderiyor.
     */
    getInfo() {
        const person = {};

        Array.from(this.form.elements).map(item => {
            if (item.name) {
                person[item.name] = item.value;
            }
        });

        this.people.push(new Person(person.fname, person.surname, person.kanton));
        this.renderTable();
    }

    /**
     * Bu metod form alanlarini temizliyor.
     */
    cleanForm() {
        this.nameId.value = '';
        this.surnameId.value = '';
    }

    /**
     * Bu metod tablomuzu olusturuyor.
     */
    renderTable(arr = []) {
        const people = arr.length ? arr : this.people;
        let table = `<table class="table">`;
        table += `<thead>`;
        table += `<tr>
                    <th class="fname">Name</th>
                    <th class="surname">Surname</th>
                    <th class="kanton">Kanton</th>
                    </tr>`;
        table += `</thead>`;

        people.map(item => {
            table += `<tr>
                        <td>${item.fname}</td>
                        <td>${item.surname}</td>
                        <td>${item.kanton}</td>
                    </tr>`;
        }).join('');

        table += `</table>`;
        this.addToDom(table);
        this.cleanForm();
    }

    /**
     * Bu metod tablonun DOM'da gorunumunu sagliyor.
     */
    addToDom(template) {
        document.querySelector('.myTable').innerHTML = template;
    }
}