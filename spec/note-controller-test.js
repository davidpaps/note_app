
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
    assert.isTrue(noteController.htmlify() === "<ul><li><div><a href='#0'>test</a></div></li></ul>");
 })();

 (function testInsert() {
  var fakeDiv = {
    innerHTML: ""
  }
  var fakeDocument = {
    getElementById: function(){
      return fakeDiv
    }
  }
    var noteController = new NoteController(fakeDocument);
    noteController.addNote("test");
    noteController.insert();
    assert.isTrue(fakeDiv.innerHTML.includes("test"));
 })();

//  (function testInsert() {
//     var noteController = new NoteController();
//     noteController.addNote("test");
//     mockElement();
//     noteController.insert("app");
//     assert.isTrue(document.getElementById("app").innerHTML.includes("test"));
//  })();

//  function mockElement() {
//     var element = document.createElement('div');
//     element.setAttribute('id', 'app');
//     document.body.appendChild(element)
//  };