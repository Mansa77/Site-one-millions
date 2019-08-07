// var header = document.getElementById("header-container");
// console.log(header);
// header.style.backgroundColor = "red";
// var titre = document.getElementsByClassName("title");

// titre[0].addEventListener("click", function(event) {
//   header.style.backgroundColor = "green";
// });

// console.log(titre);

// back-to-top
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
