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

  exports.NoteController = NoteController;
})(this);

(function makeUrlChangeShowNoteOnCurrentPage() {
  window.addEventListener("hashchange", showNoteOnCurrentPage);

  function showNoteOnCurrentPage() {
    showNote(getIDFromUrl(window.location));
  }
  function getIDFromUrl(location) {
    return location.hash.split("#")[1];
  }
  function showNote(ID) {
    document.getElementById("app").innerHTML = note.noteList
      .showNotelist(ID)
      [ID].showNote();
  }
})();
