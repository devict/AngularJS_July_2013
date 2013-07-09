/*global app*/
'use strict';

app.controller('NotesCtrl', function ($scope, NoteModel) {
  NoteModel.load();

  $scope.allNotes = NoteModel.notes;

  $scope.currentNote = '';

  $scope.newNote = function () {

  };
});
