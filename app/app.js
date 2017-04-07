angular.module('handGateModule').controller('handGateCtrl',['$scope','$state','$http', function ($scope,$state,$http) {
    $scope.sendComment = function(comment) {
        return $http({
            method: 'POST',
            url: 'http://api2.handgate.com/v1/SiteComment/',
            data: comment
        }).then(function () {
            $scope.cm = {};
        });
    }
}]);