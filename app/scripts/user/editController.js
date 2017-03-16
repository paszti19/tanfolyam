angular.module('tanfolyamApp').controller('editController', EditController);

EditController.$inject = ['userRS', '$stateParams', 'DropdownValues'];

function EditController(userRS, $stateParams, DropdownValues) {
  var vm = this;

  // vm.genderOptions = DropdownValues.get('gender');
  vm.DropdownValues = DropdownValues;

}
