import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import favicon from 'serve-favicon';
import socket from 'socket.io'
import { Server } from 'http'
import bodyParser from 'body-parser'
import fs from 'fs'
import mongoose from 'mongoose'
import Message from '../db/messageSchema'
/* eslint-disable no-console */


const port = 5000;
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('tools/tmp/uploads'))

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

  socket.on('chat message', function(msg) {
    console.log('sending message to', msg.room)
    console.log('this message', msg)
    io.to(msg.room).emit('chat message', JSON.stringify(msg))
  })

  socket.on('file_upload', (data, buffer) => {
    console.log(data)
    const user = data.user
    const fileName = __dirname + '/tmp/uploads/' + data.file;

    fs.open(fileName, 'a+', (err, fd) => {
      if (err) throw err;

      fs.write(fd, buffer, null, 'Binary', (err, written, buff) => {
        fs.close(fd, () => {
          console.log('file saved successfully!')
        });
      })
    })
    console.log('reached room, sending', fileName)
    io.to(room).emit('file_upload_success', {file: buffer, user: user})
  })
});

mongoose.connect('mongodb://admin:aech1234@ds163397.mlab.com:63397/react-chat')
const db = mongoose.connection;

db.once('open', () => {
 server.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
 });
  
  app.post('/messages', (req, res) => {
    console.log(req.body)      
      let message = new Message(req.body)
      message.save((err) => { 
        if (err) return err
      })
      res.json(req.body) 
  })

})
