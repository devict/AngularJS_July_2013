/*global app*/
'use strict';

app.directive('activeIfCurrent', function ($routeParams) {

  return function (scope, element, attrs) {
    // have to delay for note.id in attrs to resolve
    setTimeout(function () {
      if ($routeParams.id.toString() === attrs.activeIfCurrent) {
        element.addClass('active');
      }
    }, 0);
  };

});
