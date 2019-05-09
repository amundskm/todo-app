function hideButtons(){
  var buttons = document.getElementsByTagName('BUTTON');
  console.log(buttons);
  var i;
  for (i = 0; i < buttons.length; i++){
    buttons[i].style.display = "none";
  };
}

function showButtons(){
  var buttons = document.getElementsByTagName('BUTTON');
  var i;
  for (i = 0; i < buttons.length; i++){
    buttons[i].style.display = "block";
  };
}

export{ hideButtons, showButtons}
