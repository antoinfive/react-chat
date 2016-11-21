import express from 'express';  
import webpack from 'webpack';  
import path from 'path';  
import config from '../webpack.config.dev';  
import open from 'open';  
import favicon from 'serve-favicon';
import socket from 'socket.io'
import { Server } from 'http'
import bodyParse from 'body-parser'
/* eslint-disable no-console */

const port = 3000;  
const app = express();  
const server = Server(app)
const compiler = webpack(config);
const io = socket(server) 
var room;

app.use(require('webpack-dev-middleware')(compiler, {  
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));  

app.get('*', function(req, res) {  
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

io.on('connection', function(socket) {
  console.log('a user connected')
  socket.on('subscribe', (data) => {
    room = data.room
    socket.join(room)
    console.log('joined room', room) 
  }
  )
  socket.on('unsubscribe', () => { socket.leave(room) 
    console.log('leaving room', room) 
  })
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })

  // io.sockets.on('connect', (socket) => {
  //   socket.on('subscribe', (data) => {
  //     console.log('joined a room')
  //   })
  // })

  socket.on('chat message', function(msg) {
    console.log('sending message to', room)
    console.log('this message', msg)
    io.to(msg.room).emit('chat message', JSON.stringify(msg)) 
  })
});


server.listen(port, function(err) {  
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});


