app.controller('registrationController', function ($filter, $http) {
  var vm = this;

  vm.model = {
    name: 'Gipsz Ágoston'
  };

  vm.interestOptions = [
    { text: 'Állatok', value: 1 },
    { text: 'Olvasás', value: 2 },
    { text: 'IT világ', value: 3 },
    { text: 'Pszichológia', value: 4 },
    { text: 'Tudományok', value: 5 }
  ];

  vm.genderOptions = [
    { text: 'Férfi', value: 0 },
    { text: 'Nő', value: 1 }
  ];

  vm.name2 = $filter('unaccent')(vm.model.name);

  vm.register = function () {
    console.log('register');


    console.log(vm.model);

    $http.post(
      'http://localhost:10010/registration',
      vm.model
    ).then(
      function(response) {
        console.log(response);
      },
      function(error) {
        console.log(error);
      }
    );

  }
});
