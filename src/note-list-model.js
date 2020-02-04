 (function(exports) {
   function NoteList(notes) {
   this.list = [];
   };
 
 NoteList.prototype.showNotelist = function() {
    return this.list;
  }

  NoteList.prototype.showAllNotes = function() {
    for (var noteIndex = 0; noteIndex < this.list.length; noteIndex++) {
      return (this.list[noteIndex].showNote())
    }
  }

  NoteList.prototype.add = function(string){
    var note = new Note(string);
    this.list.push(note)
  }

  exports.NoteList = NoteList;

})(this);