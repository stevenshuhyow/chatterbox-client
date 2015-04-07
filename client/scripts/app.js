// YOUR CODE HERE:
//Display messages retrieved from the parse server
var app = {};
app.init = function() {

};

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

app.fetch = function(){
  $.ajax({
    url: 'https://api.parse.com/1/classes/chatterbox',
    type: 'GET',
    data: JSON.stringify(message), //{limit:, order: }
    contentType: 'application/json',
    calledOnce: true,
    success: function (data) {
      console.log('chatterbox: Message sent');
      console.log(data);
    },
    error: function (data) {
      // see: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message');
    }
  });
}

app.server = 'https://api.parse.com/1/classes/chatterbox';

app.clearMessages = function(){
  $('#chats').html('');
};

app.addMessage = function(message){
  $('#chats').append("<p></p>");
  $('#chats p').text(message.text);
  //var elements = document.getElementById('chats');
  //var textnode = document.createTextNode(message);
  //elements.appendChild(textnode);
  // var node = document.createElement("p");
  // node.appendChild(textnode);

}

app.addRoom = function(roomName) {
  $('#roomSelect').append("<p></p>");
  $('#roomSelect p').text(roomName);
}


app.addFriend = {};



var message = {
  'username': 'shawndrost',
  'text': 'trololo',
  'roomname': '4chan'
}






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

