/*global app*/
'use strict';

app.controller('NotesCtrl', function ($scope, $routeParams, $location, NoteModel) {
  var noteId = $routeParams.id;

  NoteModel.load();

  $scope.allNotes = NoteModel.notes;

  $scope.blankNote = { title: 'Untitled Note', body: '', tags: '' };

  // which note is being editted
  if (noteId !== undefined) {
    $scope.currentNote = $scope.allNotes[noteId];
  } else {
    $scope.currentNote = $scope.blankNote;
  }

  $scope.newNote = function () {
    $location.path('/notes');
  };

  $scope.saveNote = function () {
    if (noteId === undefined) {
      NoteModel.create($scope.currentNote);
      $location.path('/notes/' + NoteModel.notes.length - 1);
    } else {
      NoteModel.update($scope.currentNote, noteId);
    }
  };

  $scope.selectNote = function (id) {
    $location.path('/notes/' + id);
  };
});
