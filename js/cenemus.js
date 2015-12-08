var parameters = location.search.substring(1).split("&");
var poll, user;

$(document).ready(function() {
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

