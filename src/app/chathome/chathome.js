angular.module('rvchatapp.chathome',
  [
    'ui.bootstrap'
  ]
)

.config(function ($routeProvider) {
    $routeProvider.when( '/chathome', {
      controller: 'ChatHomeCtrl',
      templateUrl: 'chathome/chathome.tpl.html'
    });
  }
)

.controller('ChatHomeCtrl', function ($scope, $location, localStorageService) {
  $scope.user = {};

  $scope.submitUsername = function () {
    localStorageService.clearAll();
    localStorageService.add('user', JSON.stringify($scope.user));
    $location.path('/chat');
  };
});
