export default {
  messages: [
    { user: 'ChatBot',
      message: 'Welcome to React Chat -- Built using React, Redux, Express, and Socket.io'
    }, 
    { user: 'Mac Miller',
      message: 'I tots agree'
    },
    { user: 'Scott Mescudi',
      message: '!!!!!!!!!!!!!!!! I feel immortal'
    } 
  ],
  
  rooms: [
    { title: 'Music is Life', 
     messages: [ { user: 'ChatBot', message: 'Welcome to React Chat -- Built using React, Redux, Express, and Socket.io'}, { user:'Scott Mescudi', message: 'Wait, what are these words?'} ]
     },
    { title: 'Come share your feelings',
     messages: [ {user: 'Scott Mescudi', message: 'Someone explain Sockets to me Please'}, {user: 'Q-Tip', message: 'I have no idea'}] 
    }
  ],

  activeRoom: {
    title: 'Music is Life',
    messages: [ { user: 'ChatBot', message: 'Welcome to React Chat -- Built using React, Redux, Express, and Socket.io'}, { user: 'Scott Mescudi', message: 'Wait, what are these words?'}]

  }

}
