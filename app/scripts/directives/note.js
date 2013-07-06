/*global app*/
'use strict';

app.directive('note', function ($compile) {
  return {
    restrict    : 'E',
    replace     : true,
    templateUrl : 'partials/note.html',
    scope       : { note: '=' }
  };
});
