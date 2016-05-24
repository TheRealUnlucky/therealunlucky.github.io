// ---------- Firebase Stuff ----------

var fbConfig = {
    apiKey: "AIzaSyCm-dkGVy3t73B1ZuVM-gtHjEk_A4218O8",
    authDomain: "dov-website.firebaseapp.com",
    databaseURL: "https://dov-website.firebaseio.com",
    storageBucket: "dov-website.appspot.com",
};

firebase.initializeApp(fbConfig);

// ---------- Angular Stuff ---------

// Declare the main application module
// ngSanitize = The module to handle Sanitizing the 
var app = angular.module('app', ['ngSanitize', 'ngRoute', 'btford.markdown']);

app.factory('Auth', function() {
    return firebase.auth();
});

app.run(function($rootScope, $location, $window, Auth) {
    
    // Create the reference to the Firebase database
    $rootScope.firebaseDB = firebase.database().ref();
    
    $rootScope.isLoggedIn = function() {
        
        if (Auth.currentUser) {
            return true;
        } else {
            return false;
        }
    }
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
}]);
