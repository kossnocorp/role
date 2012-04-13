!function($){
  function rewriteSelector(context, name, argPos){
    var origMethod = context[name];
    context[name] = function(){
      arguments[argPos] = arguments[argPos].replace(/@([\w\u00c0-\uFFFF\-]+)/g, '[role~="$1"]')
      return origMethod.apply(context, arguments);
    };
    
    $.extend(context[name], origMethod);
  }
  
  rewriteSelector($, 'find', 0);
  rewriteSelector($.find, 'matchesSelector', 1);
  rewriteSelector($.find, 'matches', 0);
}(jQuery)