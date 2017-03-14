app.factory('listRS', function ($resource) {
  var base_url = 'http://localhost:10010';

  return $resource(base_url + '/users', {},
    {
      "get": { method: 'get', isArray: true }
    });
});
