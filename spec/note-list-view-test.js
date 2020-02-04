(function testNoteListView() {
 var noteListView = new NoteListView();
 assert.isTrue(noteListView.noteList instanceof NoteList);
})();


(function htmlString() {
  var noteListView = new NoteListView();
  var noteList = noteListView.noteList;
  noteList.add("string one");
  noteList.add("string two");
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>string one</div></li><li><div>string two</div></li></ul>");
})();
