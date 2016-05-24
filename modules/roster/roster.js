app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/roster', {
       templateUrl: 'modules/roster/html/roster.html'
    });
}]);