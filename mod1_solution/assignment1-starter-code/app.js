(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var separator = ",";
  $scope.lunchItems = "";
  $scope.comment = "";

  $scope.evaluate = function () {
    if ($scope.lunchItems === "") {
      $scope.comment = "Please enter data first";
    } else {
      var items = $scope.splitItems($scope.lunchItems);
      if (items.length > 3) {
        $scope.comment = "Too much!";
      } else {
        $scope.comment = "Enjoy!";
      }
    }
  }

  $scope.splitItems = function () {
    var items = $scope.lunchItems.split(separator);
    for(var i = items.length; i--;) {
       if (items[i].trim() === "" || items[i].trim() === "undefined") {
         items.splice(i, 1);
       }
    }
    return items;
  }
}
})();
