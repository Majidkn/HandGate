angular.module('handGateModule',['ui.bootstrap','ui.router','angular-loading-bar','restangular','ui.select', 'ngSanitize','toaster', 'ngAnimate']).config(['$stateProvider',
    function ($stateProvider) {
        var mainStates = [
            {
                state: 'home',
                config: {
                    url: '',
                    templateUrl: 'static/handgate_com/app/index.html',
                    controller: 'handGateCtrl'

                }
            },
            {
                state: 'home.step1',
                config: {
                    url: '/SignUp/Step1',
                    templateUrl: 'static/handgate_com/app/signup/step1/step1.tpl.html',
                    controller: 'signUpCtrl'
                }
            },
            {
                state: 'home.step2',
                config: {
                    url: '/SignUp/Step2',
                    templateUrl: 'static/handgate_com/app/signup/step2/step2.tpl.html',
                    controller: 'signUpCtrl'
                }
            },
            {
                state: 'home.step3',
                config: {
                    url: '/SignUp/Step3',
                    templateUrl: 'static/handgate_com/app/signup/step3/step3.tpl.html',
                    controller: 'signUpCtrl'
                }
            },
            {
                state: 'home.step4',
                config: {
                    url: '/SignUp/Step4',
                    templateUrl: 'static/handgate_com/app/signup/step4/step4.tpl.html',
                    controller: 'signUpCtrl'
                }
            }
        ];
        mainStates.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }]);