# Dependency Injection

Getting only what you need


## What's the benefit?

- Influences modular design
- Much easier to test


## How does it work?

Pass dependencies into callback function for app pieces

(controllers, directives, etc..)

    app.controller('myCtrl', function ($scope, $location) {
      
      // $scope and $location objects available

    });


## Read more?

Angular docs -- http://docs.angularjs.org/guide/di

DailyJS -- http://dailyjs.com/2013/05/23/angularjs-injection/
