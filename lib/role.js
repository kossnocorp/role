// Role.js, extension for querySelectorAll function v1.0.2 ~ https://github.com/kossnocorp/role

(function() {
  var elements, elm, _fn, _i, _len;

  elements = [];

  if (typeof Document !== "undefined" && Document !== null) elements << Document;

  if (typeof Element !== "undefined" && Element !== null) elements << Element;

  _fn = function(elm) {
    var nativeQuery;
    nativeQuery = elm.prototype.querySelectorAll;
    return elm.prototype.querySelectorAll = function(selector) {
      return nativeQuery.call(this, selector.replace(/@(\w+)/g, "[role~=\"$1\"]"));
    };
  };
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    elm = elements[_i];
    _fn(elm);
  }

}).call(this);
