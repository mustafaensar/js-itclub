let manager = new Aysecik();

const addButton = document.querySelector('#add');
addButton.addEventListener('click', function(){
  if (manager.check()) {
    manager.added();
  }
}, false);

const printButton = document.querySelector('#calculate');
printButton.addEventListener('click', function(){
  manager.print();
}, false);