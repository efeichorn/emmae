window.addEventListener('DOMContentLoaded', (event) => {
  var slideIndex = 0; // Start with the first slide (index 0)
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1; // Reset to the first slide if we reach the end
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change slide every 2000 milliseconds (2 seconds)
    setTimeout(showSlides, 2000);
  }

  // Next/previous controls with arrows
  function plusSlides(n) {
    slideIndex += n;
    showSlides();
  }

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '37') {
      plusSlides(-1); //left <- show Prev image
    } else if (e.keyCode == '39') {
      // right -> show next image
      plusSlides(1);
    }
  };
});

