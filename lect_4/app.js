(function () {

    'use strict';

    // use strict bound the variables inside, not escaped into global
    var x = 'hello'

    // first argument is name of app, and needed to be associated with <html> tag
    // and that html tag set will be linked.
    // second argument is for inherit, but we dont use at this time
    angular.module('myFirstApp', [])
        .controller('myFirstController', function () {
        });

})();// make sure that no local variables bleed into the global scope.