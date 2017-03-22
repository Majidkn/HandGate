angular.module('handGateModule').factory('signUpSrvc',signUpSrvc);

signUpSrvc.$inject = ['$http'];


function signUpSrvc($http) {
    var signUpSrvc = {
        getCountryList: getCountryList,
        requestActivationCode: requestActivationCode
    };

    return signUpSrvc;


    function getCountryList() {
        return $http.get('http://api2.handgate.com/v1/Country/');
    }
    function requestActivationCode(phoneNumber) {
        return $http({
            method: 'POST',
            url: 'http://api2.handgate.com/v1/RequestActivationCodeViaSMS/',
            data: {'phone_number': phoneNumber}
        });
    }

}