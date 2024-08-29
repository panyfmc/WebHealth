var divExames = document.getElementById("exams")
var divForms = document.getElementById("forms")
var visible = true

function togle() { // Função que abri ou fecha o formulário
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

$('.float').click(function(){ // Função alternativa para alteraro icone caso não queira usar a animação
    //$(this).find('i').toggleClass('fa-plus fa-times')
});

function animateButton() {  //Função que toca a animação de transformar o + no x e vice-versa
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
  var tituloInput = document.getElementById("Titulo");        ////
  var descricaoInput = document.getElementById("Descrição");  //
  var tituloExame = tituloInput.value;                        //Esse bloco pega os valores das caixas de input 
  var descricaoExame = descricaoInput.value;                  //
  var tituloTXT = document.createTextNode(tituloExame);       //
  var descricaoTXT = document.createTextNode(descricaoExame); ////

  var parag = document.createElement("p");
  var descri = document.createElement("p");

  parag.classList.add("titulo");
  descri.classList.add("descrição");

  parag.appendChild(tituloTXT);
  descri.appendChild(descricaoTXT);

  var ul = document.getElementById("exams");
  var li = document.createElement("li");

  li.classList.add("Exame");
  li.classList.add("Caixa");

  li.appendChild(parag);
  li.appendChild(descri);

  ul.appendChild(li);

  togle();
}