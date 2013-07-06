/*global app*/
'use strict';

app.factory('NoteModel', function () {
  return {
    notes: [],
    save: function (note) {
      this.notes.push(note);
    },
    load: function () {
      // load the notes array from localStorage
      // TODO: check limits of localstorage item length
    }
  };
});
