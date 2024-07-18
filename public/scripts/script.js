// MENU

$.ajaxSetup({ cache: false }); // evitar de armazenar cache

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  }); 
  
});



function copiarTexto() {
  var copyText = document.getElementById("mensagem");
  navigator.clipboard.writeText(copyText.value);

  botaoCopiar = document.getElementById("copiar");

  botaoCopiar.value = "Copiado!"
  botaoCopiar.classList.remove('btn-primary')
  botaoCopiar.classList.add('btn-success')

  const myTimeout = setTimeout(()=>{
          botaoCopiar.value = "Copiar"
          botaoCopiar.classList.remove('btn-success')
          botaoCopiar.classList.add('btn-primary')
      }        
  , 1000);  
  
}

$(document).ready(function () {

  // TROCA DE VENCIMENTO SCRIPT
  $.getScript("./scripts/troca-vencimento.js", function(){
  });

  // ANÁLISE DE DESCONTO SCRIPT
  $.getScript("./scripts/analise-desconto.js", function(){
  });

  // MULTA RECISÓRIA SCRIPT
  $.getScript("./scripts/multa-recisoria.js", function(){
  });

});
