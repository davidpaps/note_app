
(function(exports) {
  function NoteListView() {
    this.noteList = new NoteList();
  };

NoteListView.prototype.htmlString = function(){ 
  var array = ["<ul>"]
  for (var note = 0; note < this.noteList.list.length; note++) {
    array.push("<li><div>" + "<a href='#" + this.noteList.list[note].id + "'>" + this.noteList.list[note].showNote().slice(0,20) + "</a></div></li>");
  }
  array.push("</ul>");
  return array.join("");
}

  exports.NoteListView = NoteListView;

})(this);