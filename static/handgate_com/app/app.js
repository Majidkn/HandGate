angular.module('handGateModule').controller('handGateCtrl',['$scope','$state','$http','toaster', function ($scope,$state,$http,toaster) {
    $scope.sendComment = function(comment) {
        return $http({
            method: 'POST',
            url: 'http://api2.handgate.com/v1/SiteComment/',
            data: comment
        }).then(function () {
            $scope.cm = {};
            toaster.pop('success', "Your message has been successfully sent !");
        });
    }
}]);