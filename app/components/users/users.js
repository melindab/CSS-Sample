angular.module('directory.users', [])
.filter('formatPhone', function() {
  // This function formats all phone numbers to only use hyphens,
  // not periods or parentheses.
  return function(phone) {
    if (phone) {
      var str = phone;
      str = str.replace(/^\(/g, '').replace(/[\.\(\)]/g, '-');
      return str;
    }
  };
})
.controller('UsersController', function($scope, Users) {
  $scope.data = {};

  $scope.getUsers = function() {
    Users.getAll()
      .then(function(users) {
        $scope.data.users = users;
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  $scope.toggleUser = function(user) {
    if (user.toggledOpen) {
      user.toggledOpen = false;
    } else {
      user.toggledOpen = true;
    }
  };

  $scope.showRow = function(user, row) {
    if (user.toggledOpen && row) {
      return true;
    } else {
      return false;
    }
  };

  // This is a very simple sort by last name.
  // It does not check for edge cases such as names beginning with "Sir," "Lord," "Pope,"
  // "King," etc., or missing punctuation. It also doesn't account for languages where the
  // last name is listed first.
  $scope.sortByLastName = function(user) {
    var names = user.name.split(' ');
    var lastname = names[1];
    if (names[0] === 'Mr.' || names[0] === 'Mrs.' || names[0] === 'Ms.' || names[0] === 'Miss') {
      lastname = names[2];
    }
    return lastname;
  };

  $scope.getUsers();
});
