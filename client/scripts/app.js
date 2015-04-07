// YOUR CODE HERE:
//Display messages retrieved from the parse server
var dataRetrieved;
var app = {
  server: 'https://api.parse.com/1/classes/chatterbox'
};
var userNameStorage = [];
var userMessage = [];
var friendList = [];
//Define the initialization function
app.init = function() {
  console.log("init");
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
      $('#main').append("<a class = username href='#'>" + elem.username + "</div>");
      $('#main').append("<div class = message>" + elem.text + "</div>");
    })
  })
}

//Define the fetch/GET function
app.fetch = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON,
    contentType: 'application/json',
    calledOnce: true,
    success: function (data) {
      //console.log('chatterbox: Message sent');
      console.log("hi");
      getData(data);
      getUserMessage(data);
      dataRetrieved = data;
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
};


var getUserName = function(results){
  _.each(results, function(user, idx, list){
    userNameStorage.push(user.username);
  })
  return userNameStorage;
}

var getUserMessage = function(results){
  _.each(results, function(user, idx, list){
    userNameStorage.push(user.text);
  })
  return userMessage;
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

