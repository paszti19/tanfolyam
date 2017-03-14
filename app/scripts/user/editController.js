app.controller('editController',
  function (userRS, $stateParams, DropdownValues) {
    var vm = this;

    // vm.genderOptions = DropdownValues.get('gender');
    vm.DropdownValues = DropdownValues;

  });
