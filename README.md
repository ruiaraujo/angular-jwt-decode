angular-jwt-decode - Use jwt_decode from an Angular Controller or Service
======
Inspired by https://github.com/andresesfm/angular-underscore-module


## Usage

0. get it 

   ```bower install angular-underscore-module```

1. Add angular-jwt-decode.js to your main file (index.html)

    ```<script src="bower_components/angular-jwt-decode/angular-jwt-decode.js"></script>```

3. Add the module as a dependency in your App definition

   ```javascript
  var myapp = angular.module('MyApp', ['jwt-decode'])
   ```

4. To use, add as an injected dependency to your Controller/Service and it is ready to use

  ~~~javascript
angular.module('MyApp').controller('MyCtrl', function ($scope, JwtDecode) {
var token = 'eyJ0eXAiO.../// jwt token';

var decoded = JwtDecode(token);
console.log(decoded);

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */
~~~

  References:
  
 jwt-decode:
https://github.com/auth0/jwt-decode
 Github:
 https://github.com/andresesfm/angular-underscore-module
