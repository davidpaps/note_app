(function testNoteListView() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView.noteList instanceof NoteList);
  console.log("Test Passed");
})();

(function htmlString() {
  var noteListView = new NoteListView();
  var noteList = noteListView.noteList;
  noteList.add("123456789012345678901234567890");
  noteList.add("A23456789012345678901234567890");
  assert.isTrue(
    noteListView.htmlString() ===
      "<ul><li><div><a href='#0'>12345678901234567890</a></div></li><li><div><a href='#1'>A2345678901234567890</a></div></li></ul>"
  );
  console.log("Test Passed");
})();
