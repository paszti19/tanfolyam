function validate(event) {
  console.log('validating form...');

  var errorMessages = document.getElementsByClassName('validation');

  for (var i = 0; i < errorMessages.length; i++) {
    errorMessages[i].innerText = '';
  }

  var invalid = validateRequiredAll('name', 'password', 'email');
  validateRequired


  var approved = document.getElementById('approve').checked;

  if (!approved) {
    invalid = true;
    document.getElementById('validation-approve').innerText = 'Kötelező mező!';
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
