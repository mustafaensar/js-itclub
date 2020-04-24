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
        this.sectionOfRender = document.querySelector('.users');
        this.setListeners();
        this.setMusic();
    }

    setListeners() {
        this.submitButton.addEventListener('click', this.setUsers.bind(this));
    }

    setUsers() {
        const name = this.newUserName.value;

        const elementsOfInput = `<input type="button" value="${name}" class="newUsers">`;

        if (name !== ''){
            this.sectionOfRender.innerHTML += elementsOfInput;
        }

        new GetQuiz;
    }

    setMusic() {
        const sound = new Howl({
            src: ["./musics/littleidea.mp3"],
            autoplay: true,
            loop: true,
            volume: 0.002
        })
    }
}

class GetQuiz {
    constructor(){
        this.newUsers = document.querySelector('.newUsers');
        this.quizSection = document.querySelector('.quiz');
        this.setListeners();
    }

    setListeners(){
        this.newUsers.addEventListener('click', this.getQuiz.bind(this));
    }

    getQuiz() {
        const name = document.querySelector('.newUsers').value;
        document.querySelector('.main').style.display = 'none';
        new Manager(name);
        const button = `<input type="button" id="getQuiz" value="LET'S GO TO QUIZ">`
        this.quizSection.innerHTML += button;
        this.fullscreen();
    }

    fullscreen(){
        if(document.querySelector("#getQuiz"))
        document.querySelector("#getQuiz").addEventListener('click', this.openFullscreen.bind(this));
    }

    openFullscreen() {
        const elem = this.quizSection;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
    }
}