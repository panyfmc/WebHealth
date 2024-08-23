var divExames = document.getElementById("exams")
var divForms = document.getElementById("forms")
var floating = document.getElementById("floating")
var visible = true

function togle() {
    console.log("heyo");
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