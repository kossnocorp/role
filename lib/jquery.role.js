/*
    jquery.role.js

    Version: 0.4.1

    Copyright (c) 2011 Sasha Koss
*/

(function ($) {
    var initSizzleNewLayer = function() {
        var div = document.createElement("div"),
            id = "__sizzle__";
        div.innerHTML = "<p class='TEST'></p>";
        if ( div.querySelectorAll && div.querySelectorAll(".TEST").length !== 0 ) {
            var makeArray = function( array, results ) {
                array = Array.prototype.slice.call( array, 0 );
                if ( results ) {
                    results.push.apply( results, array );
                    return results;
                }
                return array;
            };
            try {
                Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
            } catch( e ) {
                makeArray = function( array, results ) {
                    var i = 0,
                        ret = results || [];
                    if ( toString.call(array) === "[object Array]" ) {
                        Array.prototype.push.apply( ret, array );
                    } else {
                        if ( typeof array.length === "number" ) {
                            for ( var l = array.length; i < l; i++ ) {
                                ret.push( array[i] );
                            }
                        } else {
                            for ( ; array[i]; i++ ) {
                                ret.push( array[i] );
                            }
                        }
                    }
                    return ret;
                };
            }

            var oldFind = $.find;
            $.find = function( query, context, extra, seed ) {
                context = context || document;
                if ( !seed && !$.find.isXML(context) ) {
                    var match = /^@([\w\-]+$)/.exec( query );
                    if ( match ) {
                        if ( context.nodeType === 9 ) {
                            return makeArray( context.querySelectorAll('[role~='+match[1]+']'), extra );
                        } else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
                            var oldContext = context,
                                old = context.getAttribute( "id" ),
                                nid = old || id,
                                hasParent = context.parentNode,
                                relativeHierarchySelector = /^\s*[+~]/.test( query );
                            if ( !old ) {
                                context.setAttribute( "id", nid );
                            } else {
                                nid = nid.replace( /'/g, "\\$&" );
                            }
                            if ( relativeHierarchySelector && hasParent ) {
                                context = context.parentNode;
                            }
                            try {
                                if ( !relativeHierarchySelector || hasParent ) {
                                    return makeArray( context.querySelectorAll( "[id='" + nid + "'] [role~='" + match[1] + "']" ), extra );
                                }
                            } catch(pseudoError) {
                            } finally {
                                if ( !old ) {
                                    oldContext.removeAttribute( "id" );
                                }
                            }
                        }
                    }
                    return oldFind(query, context, extra, seed);
                }
            }

            // Add jQuery.find.* properties to new find
            for ( var prop in oldFind ) {
                $.find[ prop ] = oldFind[ prop ];
            }

            // Save original of matchesSelector
            var _oldMatchesSelector = $.find.matchesSelector;
            $.find.matchesSelector = function (node, expr) {
                return _oldMatchesSelector(
                    node,
                    expr.replace(/(@[\w\-]+)/g, function ($0) {
                        return $0.replace(/^@([\w\-]+)$/, function ($0, $1) {
                            return '[role="' + $1 + '"]';
                        });
                    })
                )
            }
        }
    }

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

    initSizzleNewLayer();

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
