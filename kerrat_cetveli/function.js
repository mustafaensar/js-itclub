class newUserInput {
    constructor() {
        this.sectionOfInput = document.querySelector('.newUser');
        this.setElementsOfInput();
    }

    setElementsOfInput() {
        const elementsOfInput =
            `<input type="text" placeholder="Write Your Name" id="newUserInput"><input type="button" value="Submit" id="newUserButton">`;
        this.sectionOfInput.innerHTML = elementsOfInput;
    }
}

class Informations {
    constructor() {
        this.newUserName = document.getElementById('newUserInput');
        this.submitButton = document.querySelector('#newUserButton');
        this.setListeners();
    }

    setListeners() {
        const user = this.newUserName.value;
        if (user !== '') {
            this.submitButton.addEventListener('click', new Users(user));   
        }
    }

}

class Users {
    constructor(name) {
        this.sectionOfRender = document.querySelector('.users');
        this.button = document.querySelector('#newUserButton');
        this.setUsers(name);
        this.render()
    }

    setUsers(name) {
        const elementsOfInput =
            `<input type="button" value="${name}" id="newUser">`;
        this.sectionOfRender.innerHTML += elementsOfInput;
    }

    render() {
        const name = new UsersData()
        this.button.addEventListener('click', this.setUsers(name));
    }

}

class Point {
    constructor() {
        this.nameOfPerson = document.querySelector();
    }
}