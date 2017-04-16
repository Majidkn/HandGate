angular.module('handGateModule').controller('signUpCtrl',['$scope','$state','signUpSrvc','toaster','$interval', '$rootScope' , function ($scope,$state,signUpSrvc,toaster,$interval, $rootScope) {

    $scope.Data = {
        user: {},
        countryList: []
    };

    $scope.Func = {
        requestActivationCode: function () {
            console.log($scope.Data.user.selectedCountry, $scope.Data.user.registerPhoneNumber);
            $scope.Data.user.selectedCountry && $scope.Data.user.registerPhoneNumber ?
                $scope.Data.user.phoneNumber = $scope.Data.user.selectedCountry.code + $scope.Data.user.registerPhoneNumber : ''

            signUpSrvc.requestActivationCode($scope.Data.user.phoneNumber).then(function (response) {
                if(response.data.status_code == 1){
                    toaster.pop("success","Your phone number has been accepted. Wait for activation code !");
                    $state.go('home.step2');
                    $scope.Func.setAlarm();
                }
                else {
                    toaster.pop("error", response.data.status_message);
                    $scope.Func.setAlarm();
                }
            });
        },
        checkActivationCode: function (activation_code) {
            signUpSrvc.checkActivationCode($scope.Data.user.phoneNumber, activation_code).then(function (response) {
                toaster.pop("success","Your activation code has been accepted");
                $scope.Data.user.activation_code = activation_code;
            }, function (response) {
                toaster.pop("error",response.data.activation_code);
            })
        },
        checkPassword: function (password, password_repeat) {
            password == password_repeat ? d = true : d = false;
            d ? $scope.Data.user.password = password : toaster.pop("error","Password Confirmation");
            d && $scope.Data.user.currency && $scope.Data.user.language ? $state.go('home.step4') : '';
        },
        setAlarm: function () {
            $scope.promise = $interval(function (x) {
                var minute = Math.floor((600 - x) / 60),
                    second = Math.floor((600 - x) % 60);
                if(minute > 0 && second > 0) {
                    minute / 10 < 1 ? minute = '0' + minute : minute;
                    second / 10 < 1 ? second = '0' + second : second;
                    $scope.Data.Timer = minute + ':' + second;
                } else $interval.cancel($scope.promise)
            }, 1000);
        },
        showInvitaion: function () {

        },
        remakeUser: function () {
            $scope.Data.user = {
                phone_number: $scope.Data.user.phoneNumber,
                activation_code: $scope.Data.user.activation_code,
                password: $scope.Data.user.password,
                first_name: null,
                last_name: null,
                email: null,
                language: $scope.Data.user.language.id,
                currency: $scope.Data.user.currency.id,
                invited_by: null
            }
        }
    };


    var Run = function () {
        signUpSrvc.getCountryList().then(function (response) {
            $scope.Data.countryList = response.data;
        });
        signUpSrvc.getLanguageList().then(function (response) {
            $scope.Data.languageList = response.data;
        });
        signUpSrvc.getCurrencyList().then(function (response) {
            $scope.Data.currencyList = response.data;
        });
        $scope.Func.setAlarm();
    };
    Run();
}]);