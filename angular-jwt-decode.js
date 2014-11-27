'use strict'
angular.module('jwt-decode', []).factory('JwtDecode', function($window) {
    return $window.jwt-decode; // assumes underscore has already been loaded on the page
});
