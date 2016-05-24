app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/profile', {
       templateUrl: 'modules/profile/html/profile.html' 
    });
}])