angular.module('handGateModule',['ui.bootstrap','ui.router','angular-loading-bar','restangular','ui.select', 'ngSanitize','toaster', 'ngAnimate']).config(['$stateProvider',
    function ($stateProvider) {
        var mainStates = [
            {
                state: 'home',
                config: {
                    url: '',
                    templateUrl: 'app/index.html',
                    controller: 'handGateCtrl'

                }
            },
            {
                state: 'home.step1',
                config: {
                    url: '/SignUp/Step1',
                    templateUrl: 'app/signup/step1/step1.tpl.html',
                    controller: 'signUpCtrl'
                }
            },
            {
                state: 'home.step2',
                config: {
                    url: '/SignUp/Step2',
                    templateUrl: 'app/signup/step2/step2.tpl.html',
                    controller: 'signUpCtrl'
                }
            }
        ];
        mainStates.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }]);