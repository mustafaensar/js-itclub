class Vokabellernen {
    
    constructor() {
        this.getToFirstAnswerButton = document.querySelector("#ChoiceButton0");
        this.getToSecondtAnswerButton = document.querySelector("#ChoiceButton1");
        this.getToThirdAnswerButton = document.querySelector("#ChoiceButton2");
        this.getToFourthAnswerButton = document.querySelector("#ChoiceButton3");
        this.nextQuestionButton = document.querySelector("#nextQuestion");
        this.question = document.getElementById("question");
        this.setTheScore = document.getElementById("point");
        this.setTheDetails = document.getElementById("details");
        this.myAnswer = [];
        this.score = 0;
    }

    mapper() {
        const map = {
            'Apple' : 'Apfel',
            'Strawberry' : 'Erdbeere',
            'Cherry' : 'Kirsche',
            'Table': 'Tische',
            'Book' : 'Buch',
            'Pen' : 'Stift',
            'Window' : 'Fenster',
            'Sun' : 'Sonne',
            'Cloud' : 'Wolke',
        }
        return map;
    }

    mapperOfEnglishWords() {
        return ['Apple', 'Strawberry', 'Cherry', 'Table', 'Book', 'Pen', 'Window', 'Sun', 'Cloud'];
    }

    mapperOfDeutschWords() {
        return ['Apfel', 'Erdbeere', 'Kirsche', 'Tische', 'Buch', 'Stift', 'Fenster', 'Sonne', 'Wolke'];
    }

    getMyAnswer(position) {
        if (position == this.correctAnswerIndex){
            this.score += 5;
            this.setTheScore.innerHTML = this.score;
            this.setTheDetails.innerHTML = "CORRECT ANSWER"
        }else {
            this.setTheDetails.innerHTML = "WRONG!!! <br>" + "CORRECT ANSWER IS : " + this.correctAnswer;
        }
    }
    
    /**
     * bu fonksiyon yeni soruya gecisi saglar
     */
    getToNextQuestion(){
        const button = this.nextQuestionButton;
        const newQuestion = this.setTheNewQuestion();
        button.addEventListener('click',
        function(){newQuestion}
        );
    }

        /**
         * bu fonksiyon yeni soruyu hazirlar ve cevaplari seceneklere dagitir
         */
    setTheNewQuestion() {
        const englishWords = this.mapperOfEnglishWords();
        const deutschWords = this.mapperOfDeutschWords();
        const map = this.mapper();
        const question = englishWords[Math.floor(Math.random() * englishWords.length)];
        this.correctAnswer = map[question];
        const wrongAnswers = deutschWords.filter(item => item !== this.correctAnswer);
        for (let index = 0; index < 4; index++) {
            let randomValue = Math.floor(Math.random() * wrongAnswers.length);
            let aWrongAnswer = wrongAnswers[randomValue];
            wrongAnswers.splice(randomValue, 1);
            this.fillTheButtonText("#ChoiceButton" + index, aWrongAnswer);
        }

        this.correctAnswerIndex = Math.floor(Math.random() * 4);
        this.fillTheButtonText("#ChoiceButton" + this.correctAnswerIndex, this.correctAnswer);

        this.question.innerHTML = question;
    }

    fillTheButtonText(element, text){
        document.querySelector(element).innerHTML = text
    }
}