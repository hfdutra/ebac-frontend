// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
   
   let destaques = $('#featured') // id
   
   // console.log(titulos.first());


/*
      * Manipulação de eventos
      */
$('.featured-item a').on('blur', function(event){

   event.preventDefault();

   alert('Produto esgotado');

})



/*
 * Manipulação para o exercício do módulo 18
 */    


$('.sr-only').hide();
$('.promocionais').hide();

$('.banner').css(
 'min-height','600px'
);

$('.form-control').focus( function(){

 $(this).css({
     'color': '#000',
     'background': '#DDD',
     'font-weight': '700',
     'border': '3px solid #f42c37',
 });

});


$('#contato form button').addClass('btn btn-dark stretch-link');
$('#contato form button').css('margin-top','20px');
$('.featured-item h6').css('margin-bottom','15px');




   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   $('.featured-item:first h4').append('&nbsp;<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

/*    
   $('.featured-item h4').dblclick( function(){
      
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      
   }); */
   
   /*
    * Manipulação de eventos
    */
/*    $('.featured-item a').on('blur', function(event){
      
      event.preventDefault();
      
      alert('Produto esgotado');
      
   }) */

   /* 
    * Callback
    * entendendo ações que começam ao termino de outra
    */
/*    $('.featured-item:nth(1)')
      .hide(500, function(){
         // este é o callback
         console.log( $(this).find('h4').text() + ' esgotado')
      })
      .show(500, function(){
         console.log( $(this).find('h4').text() + ' em estoque')
      })
 
 */
   /*
    * Animações
    */
   const duracao = 1000 // equivalenta a 1 segundo

/*    $('.featured-item:nth(0)')
      .hide(duracao)
      .show(duracao)
      .fadeOut(duracao)
      .fadeIn(duracao)
      .toggle(duracao)
      .toggle(duracao)

   $('#form-submit').on('click', function(e){

      e.preventDefault()

      if( $('#email').val() != '' ){

         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, 500, function(){
            console.log($(this).val())
         })

      }


   }); */


   /*
    * Ouvinte de eventos .nav-modal-open
    */
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()


   })


   /*
    * TODO: incrementar a validação
    * - checar se o nome é válido (mais de 2 caracteres)
    * - checar se o email é válido com ao menos um "@" e "."
    * - checar se o cpf é válido com regex
    */
   function validate( elem ){
      if( elem.val() == '') {

         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
         elem.parent().find('.text-muted').show().html('o campo de '+ elem.attr('name') + ' é obrigatório')
         elem.addClass('invalid')

         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

   function validarCaract( elem ){
      if( elem.val().length <= 3) {

         console.log('Preencha o campo corretamente')
         elem.parent().find('.text-muted').show().html('Preencha o campo corretamente')
         elem.addClass('invalid')
         return false
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }


 
   function validarEmail( elem ){

      let emailRegex = /^([a-zA-Z0-9_\.\+\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/
      let email_val = elem.val()
     
         if (emailRegex.test(email_val)){
            console.log('Ok')    
             return true;
         }
         else
         {
            console.log('Não deu')   
            elem.addClass('invalid')
            elem.parent().find('.text-muted').show().html('Email inválido')
             return false;
         }
     
   }



   function validarCPF( elem ){

      let cpfRegex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/
      let cpf_val = elem.val()
     
         if (cpfRegex.test(cpf_val)){
            console.log('Ok')    
             return true;
         }
         else
         {
            console.log('Não deu')   
            elem.addClass('invalid')
            elem.parent().find('.text-muted').show().html('CPF inválido')
             return false;
         }
     
   }



   $('body').on('submit', '.modal-body .form', function(e){

      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')

      validate(inputName)
      validate(inputEmail)

      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this).submit()  
      }

   })









   $('body').on('blur', '#nome', function(){
      validate($(this))
      validarCaract($(this))
   })

   $('body').on('blur', '#email', function(){
      validate($(this))
      validarCaract($(this))
      validarEmail($(this))
   })


   $('body').on('focus', '#date', function(){
      $(this).datepicker()
   })

   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
   }) 

   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
   })

   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
   })

   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('00000-0000');
   })

   $('body').on('blur', '#cpf', function(){
      validate($(this))
      validarCPF($(this))
      $(this).mask('000.000.000-00');
   })

})
