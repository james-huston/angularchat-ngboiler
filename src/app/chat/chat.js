angular.module('rvchatapp.chat', ['ui.bootstrap', 'providers.socketio'])

.config(function ($routeProvider) {
  $routeProvider.when('/chat', {
    controller: 'ChatCtrl',
    templateUrl: 'chat/chat.tpl.html'
  });
})

.controller('ChatCtrl', function($scope, $location, localStorageService, socketio, chatConfig) {
  checkUser($scope, localStorageService);

  $scope.chatMessages = [];

  $scope.postMessage = function () {
    if (!$scope.newMessage) {
      return;
    }

    addMessage($scope);

    $scope.newMessage = '';
  };

  socketio.on('message.broadcast', function (data) {
    receiveMessage(data, $scope);
  });

  function addMessage($scope) {
    var message = {
      message: $scope.newMessage,
      user: $scope.user.username,
      time: Date.now()
    };

    $scope.chatMessages.push(message);
    socketio.emit('message.new', message);
  }

  function checkUser($scope, localStorageService) {
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

    console.log($scope.user);
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

    $scope.chatMessages.push(data);
    // $scope.$apply();
  }

});
