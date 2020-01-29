window.onscroll = function() {myFunction()};
            
var header = document.getElementById("myHeader");
var content = document.getElementById("container");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    content.classList.add("adjust");
  } else {
    header.classList.remove("sticky");
    content.classList.remove("adjust");
  }
}