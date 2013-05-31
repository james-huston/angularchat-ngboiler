describe( 'AppCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var AppCtrl, $location, $scope, config;

    beforeEach( module( 'rvchatapp' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope, chatConfig) {
      $location = _$location_;
      $scope = $rootScope.$new();
      AppCtrl = $controller( 'AppCtrl', { $location: $location, $scope: $scope });
      config = chatConfig;
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( AppCtrl ).toBeTruthy();

      expect(config).toBeTruthy();
      expect(config.test.socketServer).toBe('http://localhost:3000');
    }));
  });
});
