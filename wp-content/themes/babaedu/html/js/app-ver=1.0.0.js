//////////////////////////////////////////////////////////////////////////////////////
$(".banner_slider").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayHoverPause: true,
  autoplaySpeed: 5000,
  nav: false,
  dots: true,
  items: 1,
});
//////////////////////////////////////////////////////////////////////////////////////
$(".testimonial_slider").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  nav: true,
  dots: true,
  items: 1,
});


$('.logo_slider').owlCarousel({
    loop:true,
    margin:20,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

//////////////////////////////////////////////////////////////////////////////////////
$(".service_items a").hover(
  function () {
    $(".service_items a").css("transform", "scale(0.93)");
    $(this).css("transform", "scale(1.07)");
  },
  function () {
    $(".service_items a").css("transform", "scale(1)");
    $(this).css("transform", "scale(1)");
  }
);
//////////////////////////////////////////////////////////////////////////////////////
// // window.onload = function () {
// var form = document.getElementById("form1");
// // create the pristine instance
// var pristine = new Pristine(form);
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // check if the form is valid
//   var valid = pristine.validate(); // returns true or false
// });
// // };
//////////////////////////////////////////////////////////////////////////////////////
$(".menu_bar").on("click", function () {
  $(this).toggleClass("active");
  $("body").toggleClass("hide");
});
//////////////////////////////////////////////////////////////////////////////////////
var menuLeft = document.getElementById("cbp-spmenu-s1"),
  showLeft = document.getElementById("showLeft"),
  body = document.body;

showLeft.onclick = function () {
  classie.toggle(this, "active");
  classie.toggle(menuLeft, "cbp-spmenu-open");
  disableOther("showLeft");
};
function disableOther(button) {
  if (button !== "showLeft") {
    classie.toggle(showLeft, "disabled");
  }
}
//////////////////////////////////////////////////////////////////////////////////////
