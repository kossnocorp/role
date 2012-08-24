!function(window, methods){
  function overrideMethod(klass, methodName){
    var original;
    if (klass && (original = klass.prototype[methodName])) {
      klass.prototype[methodName] = function(){
        arguments[0] = arguments[0].replace(/@([\w\u00c0-\uFFFF\-]+)/g, '[role~="$1"]');
        return original.apply(this, arguments);
      };
    }
  }

  function overridePrototype(klass){
    for(var i=0; i<methods.length; i++)
      overrideMethod(klass, methods[i]);
  }

  overridePrototype(window.Element);
  overridePrototype(window.Document);
}(this, ['querySelector', 'querySelectorAll', 'webkitMatchesSelector', 'mozMatchesSelector', 'oMatchesSelector', 'matchesSelector']);
