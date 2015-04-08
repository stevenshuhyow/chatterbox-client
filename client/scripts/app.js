// YOUR CODE HERE:
//Display messages retrieved from the parse server
var dataRetrieved;
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
};
var friendList = [];
var information = [];
var roomNames = {};
var currentRoom;
//Define the initialization function
app.init = function() {
   app.fetch();


  $(document).ready(function(){

    $('body').on("click", "#main .username", function(){
      var specificUser = $(this).text();
      console.log(specificUser);
      app.addFriend(specificUser);
    });

    $('#send').on("click", ".submit", function(evt){
      console.log("33");
      var message = $('textarea#message').val();
      app.handleSubmit(message);
      evt.preventDefault();
    });
  })

  // var getRoomNames = _.each(information, function(element){
  //   if(roomNames.indexOf(element.roomName) < 0){
  //     roomNames.push(element.roomName);
  //   }
  // });


};


//Define the send/POST function
app.send = function(message){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};



var getData = function(data){
  _.each(data, function(element){
    _.each(element, function(elem){
      information.push(elem);
      roomNames[elem.roomname] = elem.roomname;
    })
  })
}

var filter = function(objectList){

  _.each(objectList, function(elem){
    console.log(elem)
    if(elem.roomname === currentRoom){
      $('#main #chats').append("<a class='username'>" + elem.username +" : " + elem.text+ "</a>");
    }

  });

}

//Define the fetch/GET function
app.fetch = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: {limit: 10},
    contentType: 'application/json',
    calledOnce: true,
    success: function (data) {
      getData(data);
      app.createRoomBar(roomNames);
      currentRoom = $('select :selected').text();
      filter(information);
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
}

app.createRoomBar = function(roomObject){
  _.each(roomObject, function(roomname){
    if(roomname !== undefined){
    var room = $('<option></option>');
    // room.val(roomname);
    room.text(roomname);
    $('select').append(room);
    }
  })
}





app.clearMessages = function(){
  $('#chats').html('');
};

app.addMessage = function(message){
  //$('#chats').append("<p class = username></p>");
  //$('#chats p').text(message.username);
  $('#chats').append("<p class = 'message username'></p>");
  $('#chats p').text(message.username + " - " + message.text);
}

app.handleSubmit = function(message) {
  $('#main').append("<p></p>");
  $('#main p').text(message);
}

app.addRoom = function(roomName) {
  $('#roomSelect').append("<p></p>");
  $('#roomSelect p').text(roomName);
}



app.addFriend = function(username){
  friendList.push(username);
};



var message = {
  'username': 'shawndrost',
  'text': 'trololo',
  'roomname': '4chan'
}

app.init();






// Msg.retrieve = function() {
//     $.ajax({
//       url : 'https://api.parse.com/1/classes/<className>',
//       type : 'GET',
//       dataType: 'JSON',
//       contentType : 'application/json',
//       headers : {
//         'X-Parse-Application-Id' : 'APP-ID',
//         'X-Parse-REST-API-Key' : 'API-KEY'
//       },
//       data : JSON.stringify({
//         key : 'value: '
//       }),
//       error : function(data) {
//           console.log('error');
//       },
//       success : function(data) {
//           console.log('success', data);
//           return data;                      // do I need to return the data?
//       }
//     });
//   }

//Setup a way to refresh the displayed messages (either automatically or with a button)

//Be careful to use proper escaping on any user input. Since you're displaying input that other users have typed, your app is vulnerable XSS attacks


//Allow users to select a username and send messages



// var message = {
//   'username': 'shawndrost',
//   'text': 'trololo',
//   'roomname': '4chan'


// $.ajax({
//   // always use this url
//   url: 'https://api.parse.com/1/classes/chatterbox',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message');
//   }
// });

