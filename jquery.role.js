/*
    jquery.role.js

    Version: 0.2.0

    Copyright (c) 2011 Sasha Koss
*/

(function ($) {
    $.role = function (roleName, context) {

        var selector;

        if ( roleName.charAt(0) === '#' ) {
            selector = '#role-' + roleName.substring(1);
        } else {
            selector = '[role="' + roleName + '"]';
        }

        return $(selector, context);
    };

    if (typeof $.r === 'undefined') {
        $.r = $.role;
    }
})(jQuery);
