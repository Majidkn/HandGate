angular.module('handGateModule').factory('signUpSrvc',signUpSrvc);

signUpSrvc.$inject = ['$http'];


function signUpSrvc($http) {
    var signUpSrvc = {
        getCountryList: getCountryList,
        requestActivationCode: requestActivationCode,
        checkActivationCode: checkActivationCode,
        getLanguageList: getLanguageList,
        getCurrencyList: getCurrencyList,
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

    function checkActivationCode(phone_number, activation_code) {
        return $http({
            method: 'POST',
            url: 'http://api2.handgate.com/v1/CheckActivationCode/',
            data: {"phone_number":phone_number, "activation_code":activation_code}
        });
    }

    function getLanguageList() {
        return $http.get('http://api2.handgate.com/v1/Language/');
    }

    function getCurrencyList() {
        return $http.get('http://api2.handgate.com/v1/Currency/');
    }

}