angular.module('handGateModule').controller('signUpCtrl',['$scope','$state','signUpSrvc','toaster','$interval' , function ($scope,$state,signUpSrvc,toaster,$interval) {

    $scope.Data = {
        countryList: [],
        Timer: '10:00'
    };

    $scope.Func = {
        requestActivationCode: function () {
            if($scope.Data.selectedCountry && $scope.Data.registerPhoneNumber )
                phoneNumber = $scope.Data.selectedCountry.code + $scope.Data.registerPhoneNumber;
            signUpSrvc.requestActivationCode(phoneNumber).then(function (response) {
                if(response.data.status_code == 1){
                    toaster.pop("success","Your phone number has been accepted. Wait for activation code !");
                    $state.go('home.step2');
                }
                else
                    toaster.pop("error",response.data.status_message);
            });
        },
        checkActivationCode: function (activation_code) {
            signUpSrvc.checkActivationCode(phoneNumber, activation_code).then(function (response) {
                toaster.pop("success","Your activation code has been accepted");
            }, function (response) {
                toaster.pop("error",response.data.activation_code);
            })
        }
    };

    var Run = function () {
        signUpSrvc.getCountryList().then(function (response) {
            $scope.Data.countryList = response.data;
        });
        $interval(function (x) {
            var minute = Math.floor((600 - x) / 60),
                second = Math.floor((600 - x) % 60);
            if(minute >= 0 && second >= 0) {
                minute / 10 < 1 ? minute = '0' + minute : minute;
                second / 10 < 1 ? second = '0' + second : second;
                $scope.Data.Timer = minute + ':' + second;
            }
        }, 1000);
    };
    Run();
}]);