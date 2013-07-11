/*global app*/
'use strict';

app.controller('NotesCtrl', function ($scope, $routeParams, $location, NoteModel) {
  var noteId = $routeParams.id;

  NoteModel.load();

  $scope.allNotes = NoteModel.notes;

  $scope.blankNote = { id: null, title: 'Untitled Note', body: '', tags: '' };

  // which note is being editted
  if (noteId !== 'new') {
    $scope.currentNote = $scope.allNotes[noteId];
  } else {
    $scope.currentNote = $scope.blankNote;
  }

  $scope.newNote = function () {
    $location.path('/notes/new');
  };

  $scope.saveNote = function () {
    if (noteId === 'new') {
      NoteModel.create($scope.currentNote);
      $location.path('/notes/' + (NoteModel.notes.length - 1));
    } else {
      NoteModel.update($scope.currentNote, noteId);
    }
  };

  $scope.deleteNote = function (id) {
    if (id !== null) { NoteModel.del(id); }
    if (id === $scope.currentNote.id) { $location.path('/notes/new'); }
  };

  $scope.selectNote = function (id) {
    $location.path('/notes/' + id);
  };
});
