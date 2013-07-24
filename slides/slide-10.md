# Services

Helpers, plugins, plus anything else


## Angular Services

$http, $resource, $log, $rootElement, $exceptionHandler, $location, $routeParams, $timeout


## Using Services

Inject what you need as a dependency where you need it

    app.controller('myCtrl', function ($http, $log) {
      
      $http({ method: 'GET', url: 'someUrl' })
        .success(function (data, status, headers) {
          $log.log('Status: ' + status + '\n\n' + data);
        });

    });
