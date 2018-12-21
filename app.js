(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Khode";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController))
  ;
}

function AnnotateMe(name, job, blah) {
  return "Blah!";
}

console.log(DIController.toString);
// console.log(AnnotateMe());

})();
