'use strict';

angular.module('TransferListService', [])

.factory('TransferListData', [
  '$http', function ($http) {
    var TransferListData = {};

    TransferListData.getTransfer = function () {
      return $http({
                     method: 'GET',
                     url: 'http://young-water-8859.getsandbox.com/transfers',
                     data: '',
                     headers: {
                       'Content-Type': 'application/json'
                     }
                   })
    };

    return TransferListData;
  }
]);
