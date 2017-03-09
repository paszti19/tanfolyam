/*
$(function(){

  $('#btnSubmit').click(function validate(event){
    var $btnSubmit = $(this);

    console.log('validate called');
    event.preventDefault();

    var errorMessages = document.getElementsByClassName('validation');
    for(var i = 0; i < errorMessages.length; i++){
      errorMessages[i].innerText = '';
    }

    var invalid = validateRequiredAll('name', 'password', 'email');
    invalid = validateEmail('email') || invalid;
    var approved = $('#approve:checked').length != 0;

    if(!approved){
      invalid = true;
      $('#validation-approve').text('Kötelező mező!');
    }

    if(!invalid){
      $btnSubmit.attr('disabled', 'disabled');
      $.ajax({
        url: 'http://oktatas.infernus.me/register.php',
        type: 'post',
        complete: () => {
          console.log('Complete');
          $(this).removeAttr('disabled'); // CORS Toggle
        }
      });
    }

  });

  function validateRequired(id){
    var value = document.getElementById(id).value;
    if(!value){
      document.getElementById('validation-' + id).innerText = 'Kötelező mező!';
      return true;
    }

    return false;
  }

  function validateRequiredAll() {
    var invalid = false;
    for(var i = 0; i < arguments.length; i++){
      invalid = validateRequired(arguments[i]) || invalid;
    }
    return invalid;

    // for(var i in arguments){
    //   validateRequired(arguments[i]);
    // }
  }

  function validateEmail(id) {
    var $element = $(`#${id}`);
    if (!$element.val() || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($element.val()))
    {
      $element.parent().removeClass('error');
      return false;
    }
    $element.parent().addClass('error');
    return true;
  }

});
*/
