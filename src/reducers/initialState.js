export default {
  messages: [
    { user: 'Antoin',
      message: 'yo this is lit'
    }, 
    { user: 'Mac Miller',
      message: 'some would say, the most lit'
    },
    { user: 'Scott Mescudi',
      message: 'bout to go dumb with the hums'
    } 
  ],
  
  rooms: [
    { title: 'Music is Life', 
     messages: [ { user: 'antoin', message: 'its lit'}, { user:'Mac Miller', message: 'fam I know'} ]
     },
    { title: 'Come share your feelings',
     messages: [ {user: 'Scott Mescudi', message: 'I love you all'}, {user: 'Antoin', message: 'We love you Scott!'}] 
    }
  ],

  activeRoom: {
    title: 'Music is Life',
    messages: [ { user: 'antoin', message: 'its lit'}, { user:'Mac Miller', message: 'fam I know'} ]

  }

}
