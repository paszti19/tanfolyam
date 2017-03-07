function validate(event) {
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

  var approved = $('#approve').attr('checked');
console.log(approved);
  if (!approved) {
    invalid = true;
    $('#validation-approve').text('Kötelező mező!');
  }

  if (invalid) {
    event.preventDefault();
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
