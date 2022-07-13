// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());


    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
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
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     
   
     
     /*
      * Conceito de Callback
      * Entendendo ações que começam ao termino de outra 
      */

     $('.featured-item:nth(1)')
      .hide(2000, function(){
         //este é o callback
         console.log($(this).find('h4').text()+'esgotado')
     })
      .show(2000, function(){
         console.log($(this).find('h4').text()+'em estoque')
      })


      /*
      * Animações
      */

      const duracao = 1000 //equivalente a 1 segundo
      $('.featured-item:nth(0)')
         .hide(duracao)
         .show(duracao)
         .fadeOut(duracao) 
         .fadeIn(duracao)
         .toggle(duracao)
         .toggle(duracao)

      $('#form-submit').on('click', function(e){

         e.preventDefault()

         if($('#email').val() != '' ){
            $('#email').animate({
               opacity: "toggle",
               top: "-=50"

            }, duracao, function(){
               console.log($(this).val())
            })
         

         }

      })

      /*
      * Ouvinte de eventos .nav-modal-open
      */
      $('.nav-modal-open').on('click', function(e){

         e.preventDefault()

         let elem= $(this).attr ('rel')

         $('.modal-body').html($(elem).html())
         $('.modal-header h5.modal-title').html($(this).text())

         let myModal = new bootstrap.Modal($('#modelId'))

         myModal.show()

      })

      function validate( elem ){
         
         if (elem.val() == ''){
            console.log('o campo' + elem.attr('name') + 'é obrigatório')
   
            elem.addClass('invalid')
   
            return false 
         } else {
            elem.removeClass('invalid')
         }
   
         }


      $('body').on('submit', '.modal-body .form' ,function(e){

         e.preventDefault()

         const inputName = $('#nome')
         const inputEmail = $('#email')

         validate(inputName)
         validate(inputEmail)

         if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
            console.log('campos invalidos')
            return false 
         } else {
            return true
         }

         $(this).submit()

         
      })



   $('body').on('blur', '#nome', function(){

      validate($(this))

   }) 

   $('body').on('blur', '#email', function(){

      validate($(this))

   }) 

   $('body').on('blur', '#date', function(){

      validate($(this))
      $('#date').mask('00/00/0000');

   }) 

   $('body').on('focus', '#date', function(){
      $(this).datepicker()
   })

   $('body').on('blur', '#cep', function(){

      validate($(this))
      $('#cep').mask('00000-000');
      

   })
   
   $('body').on('blur', '#phone', function(){

      validate($(this))
      $('#phone').mask('00000-0000');

   })
   
   $('body').on('blur', '#cpf', function(){

      validate($(this))
      $('#cpf').mask('000.000.000-00');

   })


   $(function()
{
    //Executa a requisição quando o campo username perder o foco
    $('#cpf').blur(function()
    {
        var cpf = $('#cpf').val().replace(/[^0-9]/g, '').toString();

        if( cpf.length == 11 )
        {
            var v = [];

            //Calcula o primeiro dígito de verificação.
            v[0] = 1 * cpf[0] + 2 * cpf[1] + 3 * cpf[2];
            v[0] += 4 * cpf[3] + 5 * cpf[4] + 6 * cpf[5];
            v[0] += 7 * cpf[6] + 8 * cpf[7] + 9 * cpf[8];
            v[0] = v[0] % 11;
            v[0] = v[0] % 10;

            //Calcula o segundo dígito de verificação.
            v[1] = 1 * cpf[1] + 2 * cpf[2] + 3 * cpf[3];
            v[1] += 4 * cpf[4] + 5 * cpf[5] + 6 * cpf[6];
            v[1] += 7 * cpf[7] + 8 * cpf[8] + 9 * v[0];
            v[1] = v[1] % 11;
            v[1] = v[1] % 10;

            //Retorna Verdadeiro se os dígitos de verificação são os esperados.
            if ( (v[0] != cpf[9]) || (v[1] != cpf[10]) )
            {
                alert('CPF inválido: ' + cpf);

                $('#cpf').val('');
                $('#cpf').focus();
            }
        } 
        else
        {
            alert('CPF inválido:' + cpf);

            $('#cpf').val('');
            $('#cpf').focus();
        }
    });
});


})
