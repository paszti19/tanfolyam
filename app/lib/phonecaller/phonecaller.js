'use strict';

(function($){
  $.fn.phonecaller = function (config) {
    this.each(function (i, instance) {
      if(typeof config != 'string'){
        let defaultOptions = {
          defaultCountryCode: '',
          change: function () {

          }
        };

        let opt = $.extend({}, defaultOptions, config);

        instance.countryCode = opt.defaultCountryCode;
        instance.number = '';
        instance.fullNumber = '';

        let refresh = () => {
          instance.fullNumber = `+${instance.countryCode} ${instance.number}`;
          $(instance).find('input').val(instance.fullNumber);
          opt.change(instance.fullNumber);
        };

        $.get('lib/phonecaller/phonecaller.html',
          null, responseText => {
            $(instance).html(responseText);
            // $(instance).find(`option[value="${instance.countryCode}"]`).attr('selected', 'selected');
            refresh();
            $(instance).find('select')
              .selectpicker()
              .selectpicker('val', instance.countryCode)
              .change(function() {
                instance.countryCode = $(this).val();
                refresh();
            });

            $(instance).find('button').click(function (e) {
              e.preventDefault();
              let pushedNumber = $(this).text();

              if($.isNumeric(pushedNumber)){
                instance.number += pushedNumber;
              } else{
                instance.number = instance.number.slice(0, -1);
              }
              refresh();

            });
          });
      } else {
        switch(config){
          case 'getNumber':
            return instance.fullNumber;
            break;
        }
      }
    });

    return this;
  };
})(jQuery);
