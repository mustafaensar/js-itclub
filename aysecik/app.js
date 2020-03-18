/* let result = Functions.calculate("three", "two") */

let resultTwo = prompt("Hello Aysecik :) Please enter the first number")

let resultThree = prompt("Hello Aysecik :) Please enter the second number")

let x = Functions.textToNumber(resultTwo);

let y = Functions.textToNumber(resultThree);

let answer = x - y

    output(
        ("<strong>Hello Aysecik :) :) :)</strong><br><strong>Result: </strong>" + Functions.numberToText(answer))
    )

/*
if (result == undefined) {
    output(
        ("<strong>Hello Aysecik :) :) :)</strong><br>Please write numbers between 1 - 10 <br>AND<br>Calculate according to the rules")   
    )    
}else{
    output(
        ("<strong>Hello Aysecik :) :) :)</strong><br><strong>Result: </strong>" + result)
    )
}
*/
