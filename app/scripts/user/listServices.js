angular.module('tanfolyamApp').factory('listRS', ListRS);

ListRS.$inject = ['$resource'];

function ListRS($resource) {
  var base_url = 'http://localhost:10010';

  return $resource(base_url + '/users', {},
    {
      'get': { method: 'get', isArray: true }
    });
}
