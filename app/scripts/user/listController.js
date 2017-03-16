angular.module('tanfolyamApp').controller('listController', ListController);

ListController.$inject = ['listRS'];

function ListController(listRS) {
  var vm = this;

  vm.tableOpts = {
    data: [],
    columnDefs: [
      { field: 'name', displayName: 'Név' },
      { field: 'email', displayName: 'E-mail' },
      {
        field: 'gender',
        displayName: 'Nem',
        cellTemplate: `
<div class="ui-grid-cell-contents">
{{ grid.getCellValue(row, col) == '0' ? 'Férfi' : 'Nő' }}

</div>`
      },
      { field: 'birthName', displayName: 'Szül. név' },
      { field: 'id', displayName: 'Szerkesztés', cellTemplate: `
<a ui-sref="edit({ userId: grid.getCellValue(row, col) })">Edit</a>

` }
    ]
  };

  listRS.get(function (response) {
    vm.tableOpts.data = response;
  });



}
