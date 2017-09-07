(function () {

    'use strict';

    var x = 'hello'
    angular.module('myFirstApp', []).controller('myFirstController', function ($scope) {// special variable to access html obj
        $scope.name = "Elliott";

        $scope.sayHello = function () {
            return "Hellp World";
        };

    });

})();// make sure that no local variables bleed into the global scope.  IIFE