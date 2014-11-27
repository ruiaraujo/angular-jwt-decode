'use strict'
angular.module('jwt-decode', []).factory('JwtDecode', function($window) {
    return $window.jwt-decode; // assumes jwt-decode has already been loaded on the page
});
