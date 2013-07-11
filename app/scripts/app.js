'use strict';

var app = angular.module('ngExampleApp', []);

/* routes */
app.config(function ($routeProvider) {

  $routeProvider.when('/', { redirectTo: '/notes/new' });
  $routeProvider.when('/notes', { redirectTo: '/notes/new' });
  
  $routeProvider.when('/notes/:id', {
    controller  : 'NotesCtrl',
    templateUrl : 'views/notes.html'
  });

  $routeProvider.when('/notes/new', {
    controller  : 'NotesCtrl',
    templateUrl : 'views/notes.html'
  });
  
});
