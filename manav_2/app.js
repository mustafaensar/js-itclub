const strawberryButton = document.querySelector('#strawberryButton');
strawberryButton.addEventListener('click', function(){
  newElement('strawberryInput', "Strawberry", 'strawberryPrice');
}, false);

const grapesButton = document.querySelector('#grapesButton');
grapesButton.addEventListener('click', function(){
  newElement('grapesInput', "Grapes", 'grapesPrice');
}, false);

const pineappleButton = document.querySelector('#pineappleButton');
pineappleButton.addEventListener('click', function(){
  newElement('pineappleInput', "Pineaplle", 'pineapplePrice');
}, false);

const watermelonButton = document.querySelector('#watermelonButton');
watermelonButton.addEventListener('click', function(){
  newElement('watermelonInput', "Watermelon", 'watermelonPrice');
}, false);

const orangeButton = document.querySelector('#orangeButton');
orangeButton.addEventListener('click', function(){
  newElement('orangeInput', "Orange", 'orangePrice');
}, false);

const cherryButton = document.querySelector('#cherryButton');
cherryButton.addEventListener('click', function(){
  newElement('cherryInput', "Cherry", 'cherryPrice');
}, false);