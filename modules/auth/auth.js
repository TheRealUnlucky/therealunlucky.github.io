app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/register', {
        templateUrl: 'modules/auth/html/register.html',
        controller: 'registerController'
    });
    
    $routeProvider.when('/login', {
        templateUrl: 'modules/auth/html/login.html',
        controller: 'loginController'
    });
}]);

app.controller('registerController', ['$scope', '$rootScope', 'Auth', function($scope, $rootScope, Auth) {
    
}]);

app.controller('loginController', ['$scope', '$rootScope', 'Auth', function($scope, $rootScope, Auth) {
    
}]);