(function testSingleNoteView() {
  var note = new Note("text");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.note instanceof Note);
  console.log("Test Passed");
})();

(function testSingleNoteView() {
  var note = new Note("text");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.HTML() === "<div>text</div>");
  console.log("Test Passed");
})();
