(function testNewNoteList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0)
})();

(function testAddNote() {
  var noteList = new NoteList();
  noteList.add("abcd");
  noteList.add("efgh");
  assert.isTrue(noteList.list.length === 2);
  assert.isTrue(noteList.list[0] instanceof Note);
  assert.isTrue(noteList.list[0].id === 0);
  assert.isTrue(noteList.list[1].id === 1);
})();

(function testShowNote() {
  var noteList = new NoteList();
  noteList.add("rubyonrails");
  assert.isTrue(noteList.list[0].showNote() === "rubyonrails")
})(); 

(function testShowAllNotes() {
  var noteList = new NoteList();
  noteList.add("test one");
  assert.isTrue(noteList.showAllNotes() === "test one")
})();