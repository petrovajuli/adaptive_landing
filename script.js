// проверка, какой сейчас класс. 
menu.onclick=function myFunctio() {
  var x = document.getElementById('myTopnav');

  if (x.className == "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}