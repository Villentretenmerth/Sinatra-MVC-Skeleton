'use strict';

angular.module('Icons')

    .controller('IconsController', ['$scope', '$http', '$state', 'database',
        function($scope, $http, $state, database) {

            $scope.database = database;

}]);