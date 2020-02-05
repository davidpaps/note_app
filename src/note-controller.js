(function(exports) {

  function NoteController(){

    this.noteListView = new NoteListView();
    this.noteList = this.noteListView.noteList;
  }

  NoteController.prototype.addNote = function(text) {
    this.noteList.add(text);
  }

  NoteController.prototype.htmlify = function() {
    return (this.noteListView.htmlString());
  }

  NoteController.prototype.insert = function() {
    var message = this.htmlify();
    var element = document.getElementById('app');
    element.innerHTML = message;
  }

  exports.NoteController = NoteController;

})(this);