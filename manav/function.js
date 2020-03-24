//Create a new list item with "close" button
let myBasket = document.getElementsByTagName("li");
for (let index = 0; index < myBasket.length; index++) {
    let span = document.createElement("span");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myBasket[index].appendChild(span);    
}

//Click a close button to hide the list item
let close = document.getElementsByClassName("close");
for (let index = 0; index < close.length; index++) {
  close[index].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Create a new list item
function newElement(item, name) {
    let ul = document.getElementById("myUL")
    let li = document.createElement("li");
    let inputValue = document.getElementById(item).value;
    let text = document.createTextNode(inputValue + "kg " + name);
    li.appendChild(text);
    if (inputValue === '') {
        alert('Enter a number !!!')
    }if (inputValue <= 0) {
        alert('Enter a number higher than zero !!!')
    } else {
        ul.appendChild(li);
    }
    document.getElementById(item).value = "";

    let span = document.createElement("span")
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let index = 0; index < close.length; index++) {
        close[index].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none"
        }
    }
}