(function(exports){

function SingleNoteView(note){

  this.note = note;
}

SingleNoteView.prototype.HTML = function() {
  return "<div>" + this.note.showNote() + "</div>"
}

exports.SingleNoteView = SingleNoteView;

})(this)