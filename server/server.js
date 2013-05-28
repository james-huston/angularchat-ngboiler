var express = require('express'),
app = express(),
config = require('./config.js');

var port = config.server.listenPort;

var server = require('http').createServer(app);
// Hook Socket.io into Express
var io = require('socket.io').listen(server);

app.configure(function (){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(config.server.distFolder));
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
  });
  app.use(app.router);
});

var UserController = {
  get: function (req, res, next) {
    res.send(req.params.username)
  }
};

app.get('/api/user/:username', UserController.get);

server.listen(port, function () {
  console.log('Now serving the app at http://localhost:' + port + config.server.distFolder);
});

io.sockets.on('connection', function (socket) {
  socket.on('message.new', function (data) {
    socket.broadcast.emit('message.broadcast', data);
    socket.emit('message.received', {time: Date.now()});
  })
});

