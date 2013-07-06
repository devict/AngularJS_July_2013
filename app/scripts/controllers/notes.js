/*global app*/
'use strict';

app.controller('NotesCtrl', function ($scope) {
  //$scope.allNotes = NoteModel.notes();
  window.scope = $scope;
  $scope.allNotes = [
    {
      'title': 'Meeting Notes Dev Staff 6/28',
      'body': 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
      'tags': 'random yeah dude',
      'archived': false
    },
    {
      'title': 'Notes from UpFront Wichita Meetup',
      'body': 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
      'tags': 'random note stuff thing ',
      'archived': false
    },
    {
      'title': 'Deployment Plan for Easy Home',
      'body': 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
      'tags': 'stuff thing yeah dude',
      'archived': false
    },
    {
      'title': 'Some other note',
      'body': 'Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.',
      'tags': 'random note thing yeah dude',
      'archived': false
    }
  ];
});
