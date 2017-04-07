angular.module('handGateModule').controller('signUpCtrl',['$scope','$state','signUpSrvc', function ($scope,$state,signUpSrvc,toaster) {

    $scope.Data = {
        countryList: []
    };

    $scope.Func = {
        requestActivationCode: function () {
            var countryCode = $scope.Data.selectedCountry.code;
            var phoneNumber = countryCode + $scope.Data.registerPhoneNumber;
            signUpSrvc.requestActivationCode(phoneNumber);
        }
    };

    var Run = function () {
        signUpSrvc.getCountryList().then(function (response) {
            $scope.Data.countryList = response.data;
        });

    };
    Run();
}]);