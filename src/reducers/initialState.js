export default {
  messages: [
    { user: 'Antoin',
      message: 'this are happening'
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
     messages: [ { user: 'antoin', message: 'via sockets yo'}, { user:'Mac Miller', message: 'I know, so many sockets'} ]
     },
    { title: 'Come share your feelings',
     messages: [ {user: 'Scott Mescudi', message: 'I love you all'}, {user: 'Antoin', message: 'We love you Scott!'}] 
    }
  ],

  activeRoom: {
    title: 'Music is Life',
    messages: [ { user: 'antoin', message: 'via sockets yo'}, { user:'Mac Miller', message: 'I know, so many sockets'} ]

  }

}
