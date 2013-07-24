# Routing & Views

**Routing**: Simluating browser navigation

**Views**: Keeping module specific markup separated


## Routing services

$route, $routeProvider, $routeParams, $location


## ng-view directive

Where the view content for a route will be loaded

    <div ng-view></div>


## Configuring routes

Specify route with associated controller and view file/string

    app.config(function ($routeProvider) {
      
      $routeProvider.when('/books', {
        controller  : 'BooksCtrl',
        templateUrl : 'books.html'
      });

    });
