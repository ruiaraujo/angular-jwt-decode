'use strict'
angular.module('jwt-decode', []).factory('JwtDecode', function($window) {
    return {
        decode: $window.jwt_decode // assumes jwt-decode has already been loaded on the page
    }
});
