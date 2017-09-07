(function () {

    'use strict';

    angular.module('NameCalculator', []).controller('NameCalculatorController', function ($scope) {// special variable to access html obj
        $scope.name = "";
        $scope.totalValue=0;
        
        $scope.displayNumeric=function(){
            var totalNameValue = calculatorNumericString($scope.name);
            $scope.totalValue = totalNameValue;
        };
    
        function calculatorNumericString(string){
            var totalStringValue = 0;
            for (var i = 0; i < string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }

    });

})();// make sure that no local variables bleed into the global scope.  IIFE