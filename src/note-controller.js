(function(exports) {

  function NoteController(doc = document){

    this.noteListView = new NoteListView();
    this.noteList = this.noteListView.noteList;
    this.doc = doc;
  }

  NoteController.prototype.addNote = function(text) {
    this.noteList.add(text);
  }

  NoteController.prototype.htmlify = function() {
    return (this.noteListView.htmlString());
  }

  NoteController.prototype.insert = function(divId = 'app') {
    var message = this.htmlify();
    var element = this.doc.getElementById(divId);
    element.innerHTML = message;
  }

  exports.NoteController = NoteController;

})(this);