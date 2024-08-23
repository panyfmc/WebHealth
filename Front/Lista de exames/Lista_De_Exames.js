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
    $(this).find('i').toggleClass('fa-plus fa-times')
});