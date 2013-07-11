'use strict';

var app = angular.module('ngExampleApp', []);

/* routes */
app.config(function ($routeProvider) {

  $routeProvider.when('/', {
    redirectTo: '/notes'
  });
  
  $routeProvider.when('/notes/:id', {
    controller  : 'NotesCtrl',
    templateUrl : 'views/notes.html'
  });

  $routeProvider.when('/notes', {
    controller  : 'NotesCtrl',
    templateUrl : 'views/notes.html'
  });
  
});
