describe('Socket service', function () {
  beforeEach(module('service.socketio'));

  var localSocket;
  beforeEach(inject(function (socket, $rootScope) {
    localSocket = socket;
  }));

  describe('when tested locally and a simple event is registered', function () {

    it('should be triggered when emitted', function () {
      expect(localSocket).not.toBe(undefined);

      var received = false;
      localSocket.on('server:blarg', function (data) {
        received = true;
        console.log('server:blarg received');
        console.log(data);
      });

      localSocket.emit('blarg', {message: 'do a little dance'});
    });
  });
});
