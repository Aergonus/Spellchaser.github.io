var Firebase = require("firebase");
var parameters = location.search.substring(1).split("&");
var poll, user;
var hash = CryptoJS.MD5(poll);
var callbacks = $.Callbacks();
callbacks.add(load);

$(document).ready(function() {
  var UUID;
  $.ajax({
    type: 'GET',
    dataType: 'text',
    url: "http://cors.io/?u=https://www.uuidgenerator.net/api/version4",
    success: function(response){
      UUID = response;
    }
  });
  for (i in parameters) {
    var temp = parameters[i].split("=");
    switch(temp[0]) {
      case 'p': poll = temp[1];
          break;
      case 'u': user = temp[1];
          break;
      default:
          console.log("Invalid parameter.");
    }
  }

  console.log("Poll: " + poll + ", User: " + user);
});

$( "#create" ).click(function() {

  alert( "Handler for .click() called." );
});

function getUUID(p, u) {

}

function setUser(u) {
  user = u;
  $("input[name=u]").value = user;
}

function setPoll(p) {
  poll = p;
  $("input[name=p]").value = poll;
}
