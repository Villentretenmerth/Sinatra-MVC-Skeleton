'use strict';

angular.module('Icons')

    .factory('database', ['$state', '$rootScope', '$http', function($state, $rootScope, $http){

        var factory = {};

        factory.all_icons = function() {

            $http.get('/all_icons').then(function successCallback(response) {
                factory.icons = response.data;
            });

        };

        return factory

    }]);