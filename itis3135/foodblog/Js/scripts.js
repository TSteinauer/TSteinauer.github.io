

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /**** click even on toggle menu ****** */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
});

//owl carousel for blog
$('.owl-carousel').owlCarousel();





function reveal() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("reveal");
    var cmnts = document.getElementById("comments");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      cmnts.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      moreText.style.fontFamily = "var(--RobotoSlab)";
      cmnts.style.display = "inline";
    }
  }

  function reveal2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("reveal2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      moreText.style.fontFamily = "var(--RobotoSlab)";
    }
  }