'use strict';

angular.module('myApp.view3', ['TransferListService', 'ngRoute'])

.config([
          '$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view3', {
      templateUrl: 'view3/view3.html',
      controller: 'View3Ctrl'
    });
  }
        ])

.controller('View3Ctrl', [
  '$scope', 'TransferListData', '$log', function ($scope, TransferListData, $log) {
    $scope.status;
    $scope.transferLists;
    getData();

    function getData() {
      TransferListData.getTransfer()
      .then(
        function successCallback(response) {
          $scope.transferLists = response.data;
        },
        function errorCallback(reasone) {
          $scope.status = 'Nie można pobrać danych: ' + reasone;
          $log.info(reasone);
        }
      )
    }

    $scope.sortColumn = '';
    $scope.reverseSort = false;
    $scope.sortData = function (column) {
      $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
      $scope.sortColumn = column;
    };

    $scope.getSortClass = function (column) {
      if ($scope.sortColumn == column) {
        return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
      }
      return '';
    }
  }
]);
