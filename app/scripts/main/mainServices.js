app.service('DropdownValues', function ($timeout) {
  this._values = {
    gender: [],
    interest: []
  };

  $timeout(() => {
    this._values.gender = [
      {text: 'Férfi', value: 0},
      {text: 'Nő', value: 1}
    ];

    this._values.interest = [
      {text: 'Állatok', value: 1},
      {text: 'Olvasás', value: 2},
      {text: 'IT világ', value: 3},
      {text: 'Pszichológia', value: 4},
      {text: 'Tudományok', value: 5}
    ];
  }, 100);

});
