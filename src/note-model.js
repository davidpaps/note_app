(function(exports) {
  function Note(note) {
    this.text = note;
  };

  Note.prototype.showNote = function() {
    return this.text;
  }

  exports.Note = Note;
})(this);

