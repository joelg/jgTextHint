jgTextHint: a jQuery plugin
===========================

jgTextHint is a jQuery plugin to enable you to show neat text hints on your text inputs, based on the initial value of the text box.

Usage
-----

First, load jQuery and the plugin:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.jgTextHint.js" type="text/javascript"></script>

Now, choose a set of elements to apply jgTextHint to:

    $(document).ready(function(){
        $('input[type=text]').jgTextHint();
    });

The above applies jgTextHint to all text input boxes on your page.