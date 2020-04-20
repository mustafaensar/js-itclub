class Question {
    constructor(firstNumber, secondNumber, answer) {
        this.date = new Date().toDateString();
        this.expected = firstNumber * secondNumber;
        this.score = this.expected == answer;
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.answer = answer;
    }
}

class Quiz {
    constructor() {
        this.quizes = [];
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.tests = new Quiz();
    }

    addQuiz(quiz) {
        this.tests.quizes.push(quiz);
    }

    printResults() {
        this.tests.quizes.forEach(question => {
            console.log(this.name, question.date, question.firstNumber,
                question.secondNumber, question.answer, question.expected,
                question.score);
        })
    }
}

class Manager {
    constructor(name) {
        this.person = new Person(name);
        this.firstNumber = this.random();
        this.secondNumber = this.random();
        this.quizSection = document.querySelector('.quiz');
        this.check();
        this.start();
    }

    random() {
        return Math.floor(Math.random() * 9);
    }

    start() {
        document.querySelector('.newUsers').addEventListener('click', this.letsGo.bind(this))
    }

    letsGo(){
        this.quizSection.innerHTML += button;
    }

    check() {
        // ilk, ikinci ve sonuc sayilarini html den al
        this.person.addQuiz(new Question(this.firstNumber, this.secondNumber, 22));
        this.person.printResults();
    }
}