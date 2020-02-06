(function testNoteListView() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView.noteList instanceof NoteList);
})();


(function htmlString() {
  var noteListView = new NoteListView();
  var noteList = noteListView.noteList;
  noteList.add("123456789012345678901234567890");
  noteList.add("A23456789012345678901234567890");
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>12345678901234567890</div></li><li><div>A2345678901234567890</div></li></ul>");
})();
