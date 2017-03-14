app.controller('registrationController',
  function ($filter, registrationRS, userRS, $stateParams, $translate) {
    var vm = this;

    vm.interestOptions = [];
    vm.genderOptions = [];

    vm.model = {
      // "name": "Gábor",
      // "password": "asdadAAAA",
      // "email": "asdasd@asdasd.hu",
      // "gender": 0,
      // "birthName": "Gábor",
      // "interest": 2
    };

    $translate('REGISTRATION.INTEREST.ANIMALS').then(function () {
      vm.interestOptions = [
        {text: $translate.instant('REGISTRATION.INTEREST.ANIMALS'), value: 1},
        {text: $translate.instant('REGISTRATION.INTEREST.READING'), value: 2},
        {text: $translate.instant('REGISTRATION.INTEREST.IT'), value: 3},
        {text: $translate.instant('REGISTRATION.INTEREST.PSYCHOLOGY'), value: 4},
        {text: $translate.instant('REGISTRATION.INTEREST.SCIENCE'), value: 5}
      ];

      vm.genderOptions = [
        {text: $translate.instant('REGISTRATION.GENDER.MALE'), value: 0},
        {text: $translate.instant('REGISTRATION.GENDER.FEMALE'), value: 1}
      ];
    });

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

