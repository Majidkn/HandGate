angular.module('handGateModule',['ui.bootstrap','ui.router','angular-loading-bar','restangular','ui.select', 'ngSanitize']).config(['$stateProvider',
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
                state: 'home.signup',
                config: {
                    url: '/signUp',
                    templateUrl: 'app/signup/signup.tpl.html',
                    controller: 'signUpCtrl'
                }
            }
        ];
        mainStates.forEach(function (state) {
            $stateProvider.state(state.state, state.config);
        });
    }]);