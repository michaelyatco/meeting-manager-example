/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $scope.setup = function() {
      $http.get("/api/v1/meeings.json").then(function(response) {
        $scope.meetings = response.data;
      });
    };
    $scope.message = "Hello world!";
  });
}());