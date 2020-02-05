
(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  };

NoteListView.prototype.htmlString = function(){ 
  var array = ["<ul>"]
  for (var note = 0; note < this.noteList.list.length; note++) {
    array.push("<li><div>" + this.noteList.list[note].showNote() + "</div></li>")
  }
  array.push("</ul>");
  return array.join("");
}

  exports.NoteListView = NoteListView;

})(this);