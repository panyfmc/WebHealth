var divExames = document.getElementById("exams")
var divForms = document.getElementById("forms")
var visible = true

function togle() {
    if (visible) {
        divExames.style.display = "none";
        divForms.style.display = "block"
        visible = false;
    }else{
        divExames.style.display = "grid"
        divForms.style.display = "none"
        visible = true;
    }
}

$('.float').click(function(){
    //$(this).find('i').toggleClass('fa-plus fa-times')
});

function animateButton() {
    var button = $('.float');
    if (button.hasClass('animate-hi')) {
      button.removeClass('animate-hi').addClass('animate-hi-reverse');
    } else if (button.hasClass('animate-hi-reverse')) {
      button.removeClass('animate-hi-reverse').addClass('animate-hi');
    } else {
      button.addClass('animate-hi');
    }
  };
  $(document).ready(function() {
    $('.float').on("click", function() {
      animateButton();
    });
  });