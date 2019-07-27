$(document).ready(function(){
    $("#username").keydown(function(event){ 
    let size = document.getElementById('username').value.length;
      if(size < 7){
          $("div").html("Username must be atleast 8 characters");
      }
      else {
          $("div").html(" ");
      }
    });
  });