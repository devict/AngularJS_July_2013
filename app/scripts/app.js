'use strict';

var app = angular.module('ngExampleApp', []);

/* routes */
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    controller  : 'NotesCtrl',
    templateUrl : 'views/notes.html'
  });
});
