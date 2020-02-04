function NoteController(){
}


NoteController.prototype.greeting = function(greet) {
  var x = document.getElementById('app');
  x.innerHTML = greet;
}
