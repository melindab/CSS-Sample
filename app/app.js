angular.module('directory', [
  'directory.users-factory',
  'directory.users',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'app/components/users/users.html',
      controller: 'UsersController'
    })
    .otherwise({
      redirectTo: '/users'
    });
});
