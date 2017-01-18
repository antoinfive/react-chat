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
import Room from '../db/roomSchema'
import { Binary } from 'mongodb'
import serveStatic from 'serve-static'
import imageDecoder from './imageDecoder'
// import Image from '../db/imageSchema'
/* eslint-disable no-console */


const port = 5000;
const app = express();
const server = Server(app)
const compiler = webpack(config);
const io = socket(server)
const staticPath = path.join(__dirname, '..', '/public')

var room;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(serveStatic(staticPath))

app.get('/messages', (req, res) => {
  Message.find({room: room}, (err, docs) => {
    res.json(docs) 
  })

})  

app.get('/rooms', (req, res) => {
  console.log('in fetch rooms')
  Room.find({}, (err, docs) => {
    console.log('docs', docs)
    res.json(docs)
  })
})

app.post('/rooms', (req, res) => {
  let message = new Message({user: req.body.messages[0].user, content: req.body.messages[0].content, room: req.body.title})
  console.log('message', message)
  let room = new Room({title: req.body.title})

  message.save((err) => {
    if (err) return err
  })

  room.save((err) => {
    if (err) return err
  })

  res.json(message)
})

app.get('/', function(req, res) {
  console.log('get route caught this')
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
    let message = new Message({user: msg.user, content: msg.message, room: msg.room})
    message.save((err) => { 
        if (err) return err
      })
     
    io.to(msg.room).emit('chat message', JSON.stringify(msg))
  })
  
  socket.on('new room', (roomData) => {
    let message = new Message({user: roomData.user, content: roomData.message, room: roomData.room})
    message.save((err) => {
      if (err) return err
    })
    
  })

  socket.on('file_upload', (data, buffer) => {
    console.log(data)
    const user = data.user
    const fileName = path.join(__dirname, '../public/images', data.file)
    const tmpFileName = path.join('/images', data.file)
    const imageBuffer = imageDecoder(buffer)      

    fs.open(fileName, 'a+', (err, fd) => {
      if (err) throw err;

      fs.writeFile(fileName, imageBuffer.data, {encoding: 'base64'}, (err) => { 
        fs.close(fd, () => {
          let message = Message({user: user, room: room, image: tmpFileName})
          
          message.save((err) => {
            if (err) return err
          }) 
          console.log('file saved successfully!')
        });
      })
    })

    console.log('reached room, sending', fileName)
    io.to(room).emit('file_upload_success', {file: tmpFileName, user: user})
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


// app.post('/messages', (req, res) => {
//   console.log(req.body)      
//     let message = new Message({user: req.body.user, content: req.body.message, room: room})
//     message.save((err) => { 
//       if (err) return err
//     })
//       res.json(req.body) 
//  })

})

