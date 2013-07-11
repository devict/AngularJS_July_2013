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
    delete: function (idx) {
      this.notes.splice(idx, 1);
      this.sync();
    },
    load: function () {
      this.notes = JSON.parse(window.localStorage.getItem('angular-notes'));
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
