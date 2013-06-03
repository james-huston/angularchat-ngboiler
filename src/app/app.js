angular.module( 'rvchatapp', 
  [
    'LocalStorageModule',
    'app-templates',
    'directives-templates',
    'rvchatapp.chathome',
    'rvchatapp.chat',
    'rvchatapp.dualchat',
    'directives.autofocuselement',
    'directives.autoscroll',
    'directives.chatbox',
    'providers.socketio'
  ]
)

.value('chatConfig', {
  test: {
    socketServer: 'http://localhost:3000'
  },
  production: {
    socketServer: 'http://localhost:3000'
  }
})

.config( function myAppConfig ( $routeProvider, $provide, socketioProvider, chatConfigProvider ) {
  $routeProvider.otherwise({ redirectTo: '/chathome' });

  var config = chatConfigProvider.$get();

  socketioProvider.setSocketServer(config.test.socketServer);
})

.run( function run () {

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
});

