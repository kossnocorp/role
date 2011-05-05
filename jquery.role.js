/*
    jquery.role.js

    Copyright (c) 2011 Sasha Koss
*/

(function ($) {
    $.role = function (roleName, context) {
        return $('[role="' + roleName + '"]', context);
    };

    if (typeof $.r === 'undefined') {
        $.r = $.role;
    }
})(jQuery);
