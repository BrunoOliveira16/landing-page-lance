$(document).ready(function() {
    var botao = $('.menu__icon');
    var dropDown = $('.menu__list');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });