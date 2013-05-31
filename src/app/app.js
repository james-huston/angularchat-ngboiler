angular.module( 'rvchatapp', 
  [
    'LocalStorageModule',
    'app-templates',
    'component-templates',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ui.route',
    'rvchatapp.chathome',
    'rvchatapp.chat',
    'service.socketio',
    'directives.autofocuselement',
    'directives.autoscroll',
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

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
});

