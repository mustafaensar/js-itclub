class newUserInput {
    constructor() {
        this.sectionOfInput = document.querySelector('.newUser');
        this.audio = document.querySelector('.audio');
        this.setElementsOfInput();
        this.setMusicOfMainPage();
    }

    setElementsOfInput() {
        const elementsOfInput =
            `<input type="text" placeholder="Write Your Name" id="newUserInput"><input type="button" value="Submit" id="newUserButton">`;
        this.sectionOfInput.innerHTML = elementsOfInput;
    }

    setMusicOfMainPage() {
        const audio = `<audio src="./musics/littleidea.mp3" autoplay></audio>`
        this.audio.innerHTML = audio;
    }
}

class Informations {
    constructor() {
        this.newUserName = document.getElementById('newUserInput');
        this.submitButton = document.querySelector('#newUserButton');
        this.sectionOfRender = document.querySelector('.users');
        this.setListeners();
    }

    setListeners() {
        this.submitButton.addEventListener('click', this.setUsers.bind(this))
    }

    setUsers() {
        const name = this.newUserName.value;

        const elementsOfInput = `<input type="button" value="${name}" id="newUser">`;
            
        this.sectionOfRender.innerHTML += elementsOfInput;
    }

}

class GetQuiz {
    constructor() {
    }


}