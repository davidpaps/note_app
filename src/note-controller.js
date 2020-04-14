(function (exports) {
  function NoteController(doc = document) {
    this.noteListView = new NoteListView();
    this.noteList = this.noteListView.noteList;
    this.doc = doc;
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.add(text);
  };

  NoteController.prototype.htmlify = function () {
    return this.noteListView.htmlString();
  };

  NoteController.prototype.insert = function (Id) {
    var message = this.htmlify();
    var element = this.doc.getElementById("app");
    element.innerHTML = message;
  };

  NoteController.prototype.submitNote = function () {
    var element = document.getElementById("text");
    var controller = this;
    element.addEventListener("submit", function (click) {
      click.preventDefault();
      controller.addNote(click.srcElement.elements[0].value);
      controller.insert("app");
    });
  };

  NoteController.prototype.showNoteOnClick = function () {
    var model = this.noteList;
    window.addEventListener("hashchange", () => {
      var noteId = location.hash.split("#")[1];
      var text = model.list[noteId].text;
      document.getElementById("app").innerHTML = text;
    });
  };

  exports.NoteController = NoteController;
})(this);
