/*global app*/
'use strict';

app.factory('NoteModel', function () {
  return {
    notes: [],
    save: function (note) {
      this.notes.push(note);
      localStorage.setItem('angular-notes', JSON.stringify(this.notes));
    },
    load: function () {
      this.notes = JSON.parse(window.localStorage.getItem('angular-notes'));
    }
  };
});
