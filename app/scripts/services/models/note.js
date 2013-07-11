/*global app _*/
'use strict';

app.factory('NoteModel', function () {
  return {
    notes: [],
    create: function (note) {
      this.notes.push(note);
      this.sync();
    },
    update: function (note, id) {
      this.notes[id] = note;
      this.sync();
    },
    del: function (idx) {
      this.notes.splice(idx, 1);
      this.sync();
    },
    load: function () {
      var localStorageNotes = JSON.parse(window.localStorage.getItem('angular-notes'));
      if (localStorageNotes !== null) {
        this.notes = localStorageNotes;
      } else {
        this.notes = [];
      }
    },
    sync: function () {
      _.each(this.notes, function (note, idx, list) {
        list[idx].id = idx;
        delete list[idx].archived;
      });
      localStorage.setItem('angular-notes', JSON.stringify(this.notes));
      this.load();
    }
  };
});
