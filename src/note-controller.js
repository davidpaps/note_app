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

  NoteController.prototype.insert = function () {
    var message = this.htmlify();
    var element = this.doc.getElementById("app");
    element.innerHTML = message;
  };

  exports.NoteController = NoteController;
})(this);

(function listenForSubmit() {
  var element = document.getElementById("text");
  element.addEventListener("submit", function (click) {
    click.preventDefault();
    var n = new NoteController();
    var text = click.srcElement.elements[0].value;
    n.addNote(text);
    n.insert();
  });
})();

(function makeUrlChangeShowNoteOnCurrentPage() {
  window.addEventListener("hashchange", showNoteOnCurrentPage);

  function showNoteOnCurrentPage() {
    showNote(getIDFromUrl(window.location));
  }
  function getIDFromUrl(location) {
    return location.hash.split("#")[1];
  }
  function showNote(ID) {
    document.getElementById(
      "app"
    ).innerHTML = noteController.noteList.showNotelist(ID)[ID].showNote();
  }
})();
