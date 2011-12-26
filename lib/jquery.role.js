// Role.js, jQuery adapter v1.0.0 ~ https://github.com/kossnocorp/role

(function($) {
  var matchesSelectorOrigin, type;
  if ($ == null) $ = jQuery;
  $.expr.match['ROLE'] = /@((?:[\w\u00c0-\uFFFF\-]|\\.)+)/;
  $.expr.preFilter['ROLE'] = function(match) {
    return ' ' + match[1] + ' ';
  };
  $.expr.filter['ROLE'] = function(el, match) {
    return (" " + (el.getAttribute('role')) + " ").indexOf(match) !== -1;
  };
  for (type in $.expr.match) {
    $.expr.match[type] = new RegExp($.expr.match[type].source + /(?![^\[]*\])(?![^\(]*\))/.source);
    $.expr.leftMatch[type] = new RegExp(/(^(?:.|\r|\n)*?)/.source + $.expr.match[type].source.replace(/\\(\d+)/g, function(all, num) {
      return "\\" + (num - 0 + 1);
    }));
  }
  if (!(document.documentElement.matchesSelector != null) && (document.documentElement.mozMatchesSelector != null)) {
    matchesSelectorOrigin = $.find.matchesSelector;
    return $.find.matchesSelector = function(node, expr) {
      return matchesSelectorOrigin(node, expr.replace(/(@[\w\-]+)/g, function($0) {
        return $0.replace(/^@([\w\-]+)$/, function(__, $1) {
          return "[role=\"" + $1 + "\"]";
        });
      }));
    };
  }
})($);
