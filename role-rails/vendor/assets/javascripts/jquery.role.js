/*
    jquery.role.js

    Version: 0.3.2

    Copyright (c) 2011 Sasha Koss
*/

(function ($) {
    $.expr.match['ROLE'] = /@((?:[\w\u00c0-\uFFFF\-]|\\.)+)/;

    $.expr.preFilter['ROLE'] = function( match, curLoop, inplace, result, not, isXML ) {
        match = " " + match[1] + " ";

        return match;
    }

    $.expr.filter['ROLE'] = function( elem, match ) {
        return (" " + elem.getAttribute('role') + " ").indexOf( match ) > -1;
    }

    for ( var type in $.expr.match ) {
        $.expr.match[ type ] = new RegExp( $.expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
        $.expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + $.expr.match[ type ].source.replace(/\\(\d+)/g, function(all, num) {
            return "\\" + (num - 0 + 1);
        }));
    }

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
