app.controller('registrationController',
  function ($filter, registrationRS, userRS, $stateParams) {
    var vm = this;

    vm.model = {
      // "name": "Gábor",
      // "password": "asdadAAAA",
      // "email": "asdasd@asdasd.hu",
      // "gender": 0,
      // "birthName": "Gábor",
      // "interest": 2
    };

    vm.interestOptions = [
      {text: 'Állatok', value: 1},
      {text: 'Olvasás', value: 2},
      {text: 'IT világ', value: 3},
      {text: 'Pszichológia', value: 4},
      {text: 'Tudományok', value: 5}
    ];

    vm.genderOptions = [
      {text: 'Férfi', value: 0},
      {text: 'Nő', value: 1}
    ];

    vm.name2 = $filter('unaccent')(vm.model.name);

    vm.register = function () {
      console.table(vm.model);

      registrationRS.register(
        vm.model,
        (resp) => {
          console.log(resp);
          alert('Siker!');
        }
      );
    };

  });

