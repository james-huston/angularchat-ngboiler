angular.module('rvchatapp.chat', ['ui.bootstrap', 'providers.socketio'])

.config(function ($routeProvider) {
  $routeProvider.when('/chat', {
    controller: 'ChatCtrl',
    templateUrl: 'chat/chat.tpl.html'
  });
})

.controller('ChatCtrl', function($scope, $location, localStorageService, socketio) {
  checkUser($scope, localStorageService);

  $scope.chatMessages = [];
  $scope.newMessage = {body: ''};
  $scope.foo = '';
  $scope.bar = {};

  $scope.init = function(user) {
    $scope.user = user;
    console.log($scope);
    console.log($scope.foo);
    console.log($scope.bar);
  };

  $scope.postMessage = function () {
    if (!$scope.newMessage && !$scope.newMessage.body) {
      return;
    }

    addMessage($scope);

    $scope.newMessage.body = '';
  };

  socketio.on('message.broadcast', function (data) {
    receiveMessage(data, $scope);
  });

  function addMessage($scope) {
    var message = {
      message: $scope.newMessage.body,
      user: $scope.user.username,
      time: Date.now()
    };

    $scope.chatMessages.push(message);
    socketio.emit('message.new', message);
  }

  function checkUser($scope, localStorageService) {
    if ($scope.user) {
      return;
    }

    var userString = localStorageService.get('user');
    if (!userString) {
      $location.path('/chathome');
    }

    try {
      $scope.user = JSON.parse(userString);

      $scope.user = $scope.user || {};

      if (!$scope.user.username) {
        $location.path('/chathome');
      }
    } catch (e) {
      $location.path('/chathome');
    }
  }

  function receiveMessage(data, $scope) {
    data = data || {
      message: '',
      user: '',
      time: ''
    };

    if (data.message === '') {
      return;
    }

    if (data.user != $scope.user.username) {
      $scope.chatMessages.push(data);
    }

    // $scope.$apply();
  }

});
