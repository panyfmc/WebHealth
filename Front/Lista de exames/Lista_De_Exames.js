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

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("exams");
  document.body.insertBefore(newDiv, currentDiv);
}