'use strict';

angular.module('Icons', ['ui.router', 'ngSanitize'])

    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

        $httpProvider.interceptors.push(['$injector', '$q', function ($injector, $q) {
            return {

                'responseError': function (response) {

                    if (response.status === 401) {

                        window.location.href = '/';
                    }
                    else if (response.status === 470) {

                        window.location.href = '/';
                    }
                    else if (response.status === 520) {

                        window.location.reload();
                    }

                    return $q.reject(response);
                }
            };
        }]);

        $httpProvider.defaults.headers.common['Pragma'] = 'no-cache'; // angular IE caching issue

        if (window.history && window.history.pushState) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }

        $stateProvider

            .state('main', {
                url: '/main',
                views: {
                    headerView: {
                        templateUrl: 'views/menu',
                        controller: 'MenuController'
                    },
                    mainView: {
                        templateUrl: 'views/icons',
                        controller: 'IconsController'
                    }
                }
            })

            .state('error_404', {
                url: '/404',
                views: {
                    errorView: {
                        templateUrl: 'views/error_404'
                    }
                }
            });

        $urlRouterProvider.otherwise('/404');

    }])


    .run(['$rootScope', '$state', '$stateParams', '$http', 'database',
        function ($rootScope, $state, $stateParams, $http, database) {

            $rootScope.state = $state;
            $rootScope.stateParams = $stateParams;
            database.all_icons();


    }]);