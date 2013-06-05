angular.module('rvchatapp.dualchat', [])

.config(function ($routeProvider) {
  $routeProvider.when('/dualchat', {
    controller: 'DualChatCtrl',
    templateUrl: 'chat/dualchat.tpl.html'
  });
})

.controller('DualChatCtrl', function ($scope) {
  $scope.localChatConfig = {
    user: 'blarg'
  };
});
