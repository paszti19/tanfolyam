function validate(event) {
  event.preventDefault();

  console.log('validating form...');

  $('.validation').each(function(index, value) {
    $(this).text('');
  });
/*
  var errorMessages = document.getElementsByClassName('validation');

  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerText = '';
  }
*/
  var invalid = validateRequiredAll('name', 'password', 'email');

  var approved = $('#approve').prop('checked');

  if (!approved) {
    invalid = true;
    $('#validation-approve').text('Kötelező mező!');
  }

  console.log('invalid: ' + invalid);

  if (!invalid) {
    $.ajax({
      url: 'http://oktatas.infernus.me/register.php',
      type: 'post',
      complete: () => {
        console.log('complete');
        //$(this).removeAttr('disabled');
      }
    });
  }


}

function validateRequired(id) {
  var value = document.getElementById(id).value;

  if (!value) {
    document.getElementById('validation-' + id).innerText = 'Kötelező mező!';
    return true;
  }

  return false;
}

function validateRequiredAll() {
  var invalid = false;

  for (var i = 0; i < arguments.length; i++) {
    invalid = validateRequired(arguments[i]);
  }

  return invalid;
}
