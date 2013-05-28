angular.module( 'rvchatapp', 
  [
    'LocalStorageModule',
    'app-templates',
    'component-templates',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ui.route',
    'rvchatapp.chathome',
    'rvchatapp.chat'
  ]
)

.config( function myAppConfig ( $routeProvider ) {
  $routeProvider.otherwise({ redirectTo: '/chathome' });
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
});

