app.controller('registrationController', function ($filter) {
  var vm = this;

  vm.model = {
    name: 'Gipsz Ágoston'
  };

  vm.interestOptions = [
    { text: 'Állatok', value: 1 },
    { text: 'Olvasás', value: 2 },
    { text: 'IT világ', value: 3 },
    { text: 'Pszichológia', value: 4 },
    { text: 'Tudományok', value: 5 },
  ];

  vm.name2 = $filter('unaccent')(vm.model.name);
});
