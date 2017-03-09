app.filter('unaccent', function()  {
  return function(input) {
    if (input && input.map) {
      return input.map(item => {
        return {
          text: filterString(item.text),
          value: item.value
        };
      });
    } else if (typeof  input == 'string') {
      return filterString(input);
    } else {
      return input;
    }

    function filterString(s) {
      return s
        .replace(/á/g, 'a')
        .replace(/í/g, 'i')
        .replace(/ű/g, 'u')
        .replace(/é/g, 'e')
        .replace(/ú/g, 'u')
        .replace(/ő/g, 'o')
        .replace(/ó/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ö/g, 'o')
        .replace(/Á/g, 'A')
        .replace(/Í/g, 'I')
        .replace(/Ű/g, 'U')
        .replace(/É/g, 'E')
        .replace(/Ú/g, 'U')
        .replace(/Ő/g, 'O')
        .replace(/Ó/g, 'O')
        .replace(/Ü/g, 'U')
        .replace(/Ö/g, 'O');
    }
  }
})
