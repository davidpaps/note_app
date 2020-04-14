(function testNewNote() {
  var note = new Note("hello");
  assert.isTrue(note.text === "hello");
  console.log("Test Passed");
})();

(function testShowNote() {
  var note = new Note("hello world");
  assert.isTrue(note.showNote() === "hello world");
  console.log("Test Passed");
})();
