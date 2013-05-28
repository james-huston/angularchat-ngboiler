
angular.module('service.socketio', [])
  .factory('socket', function ($rootScope) {

    var socket = io.connect('http://localhost:3000');
    
    return socket;

    // var emitFunction = function (eventName, data, callback) {
    //   socket.emit(eventName, data, function () {
    //     $rootScope.$apply(function () {
    //       if (callback) {
    //         callback.apply(socket, arguments);
    //       }
    //     });
    //   });
    // };

    // var onFunction = function (eventName, callback) {
    //   socket.on(eventName, function () {
    //     $rootScope.$apply(function () {
    //       callback.apply(socket, arguments);
    //     });
    //   });
    // };

    // var onErrorFunction = function (callback) {
    //   socket.socket.onError(function () {
    //     $rootScope.$apply(function() {
    //       callback.apply(socket, arguements);
    //     });
    //   });
    // };

    // return {
    //   on: onFunction, 
    //   emit: emitFunction,
    //   onError: onErrorFunction,
    //   socket: socket
    // };
  });
