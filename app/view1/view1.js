'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config([
          '$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }
        ])

.controller('View1Ctrl',
            function ($scope) {

              $scope.result = '';

              $scope.textSymbols = [
                {symbol: 'CIT'},
                {symbol: 'PIT'},
                {symbol: 'PIT24'}
              ];

              $scope.$watch('val', function (value) {
                if (value) {
                  var inputValue = value.trim().toLowerCase();

                  for (var i = 0; i < $scope.textSymbols.length; i++) {
                    var includeSymbol = $scope.textSymbols[i].symbol.toLowerCase();
                    if (includeSymbol.includes(inputValue)) {
                      $scope.result = $scope.textSymbols[i].symbol;
                      return;
                    } else {
                      $scope.result = 'Brak rozliczenia';
                    }
                  }
                } else {
                  $scope.result = 'Brak wartości';
                }

              })
            }
);
