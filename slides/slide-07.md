# Controllers

Organizing the piecs of your app


## Declaring a controller

    <div ng-app="myApp">
      <div ng-controller="myCtrl"></div>
    </div>
    var app = angular.module('myApp', []);

    app.controller('myCtrl', function ($scope) {

      // Controller code..

    });


## What does it control?

Everything inside the assigned DOM element


## Controller scope

Attached to scope, available to the DOM

    <div ng-controller="myCtrl">
      {{ myVar }}
    </div>
----
    app.controller('myCtrl', function ($scope) {

      $scope.myVar = "Hello World!";

    });


## Functions too!

    <div ng-controller="myCtrl">
      <button ng-click="myFunc()">Click!</button>
    </div>
----
    app.controller('myCtrl', function ($scope) {

      $scope.myFunc = function () {
        alert('Hello world!');
      };

    });

**note**: ng-click directive!
