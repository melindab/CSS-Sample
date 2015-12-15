angular.module('directory.users-factory', [])
.factory('Users', function($http) {
  var getAll = function() {
    return $http({
      method: 'GET',
      url: './assets/json/users.json'
    })
    .then(function(resp) {
      return resp.data;
    });
  };

  return {
    getAll: getAll
  };
});
