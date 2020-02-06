
(function testNewNoteController() {
  var noteController = new NoteController();
  assert.isTrue(noteController.noteListView instanceof NoteListView);
  assert.isTrue(noteController.noteListView.noteList instanceof NoteList);
 })();

 (function testAddNote() {
  var noteController = new NoteController();
  noteController.addNote("test");
  assert.isTrue(noteController.noteList.list.length === 1);
  assert.isTrue(noteController.noteList.list[0] instanceof Note);
  assert.isTrue(noteController.noteList.list[0].showNote() === "test");
 })();

 (function testHtmlify() {
  var noteController = new NoteController();
  noteController.addNote("test");
  assert.isTrue(noteController.htmlify() === "<ul><li><div>test</div></li></ul>");
 })();

 (function testInsert() {
  var noteController = new NoteController();
  noteController.addNote("test");
  var testapp = document.createElement("div");
  testapp.setAttribute("id", "app");
  testapp.innerHTML = "<ul><li><div>test</div></li></ul>";
  noteController.insert("app");
  assert.isTrue(document.getElementById("app").isEqualNode(testapp) );
  
 })();