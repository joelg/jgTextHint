(function($) {

    $.fn.jgTextHint = function(settings) {

         /* default settings */
         var config = {'faded_color': '#666', 'color': '#000'};
         if (settings) $.extend(config, settings);

         /* add text hints to each element */
         this.each(function() {
            var $input = $(this);
            var defaultValue = $input.val();
            $input.css('color', config.faded_color);
            $input.focus( function(){
                if($input.val() == defaultValue) {
                    $input.val('');
                    $input.css('color', config.color);
                }
            });
            $input.blur( function(){
                if($input.val() == '') {
                    $input.val(defaultValue);
                    $input.css('color', config.faded_color);
                }
            });
         });

        return this;
    };

 })(jQuery);