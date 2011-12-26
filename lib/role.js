// Role.js, extension for querySelectorAll function v1.0.0 ~ https://github.com/kossnocorp/role

(function() {
  var elm, _fn, _i, _len, _ref;

  _ref = [Document, Element];
  _fn = function(elm) {
    var nativeQuery;
    nativeQuery = elm.prototype.querySelectorAll;
    return elm.prototype.querySelectorAll = function(selector) {
      return nativeQuery.call(this, selector.replace(/@(\w+)/g, "[role~=\"$1\"]"));
    };
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    elm = _ref[_i];
    _fn(elm);
  }

}).call(this);
