(function(exports) {
  function Note(note, id) {
    this.text = note;
    this.id = id;
  };

  Note.prototype.showNote = function() {
    return this.text;
  }

  exports.Note = Note;
})(this);

