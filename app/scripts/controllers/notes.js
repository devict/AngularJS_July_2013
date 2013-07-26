/*global app*/
'use strict';

app.controller('NotesCtrl', function ($scope, $routeParams, $location, NoteModel) {
  var noteId = $routeParams.id;

  NoteModel.load();

  $scope.allNotes = NoteModel.notes;

  $scope.blankNote = { id: null, title: 'Untitled Note', body: '', tags: '' };

  // which note is being editted
  if (noteId !== 'new') {
    if ($scope.allNotes[noteId]) {
      $scope.currentNote = $scope.allNotes[noteId];
    } else {
      $location.path('/notes/new');
    }
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
    if (id !== null && id !== 'new') { NoteModel.del(id); }
    if (id === $scope.currentNote.id) { $location.path('/notes/new'); }
  };

  $scope.selectNote = function (id) {
    $location.path('/notes/' + id);
  };
});
