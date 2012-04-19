!function($){
  function rewriteSelector(context, name, argPos){
    var original = context[name];
    
    if (!original) return;
    
    context[name] = function(){
      arguments[argPos] = arguments[argPos].replace(/@([\w\u00c0-\uFFFF\-]+)/g, '[role~="$1"]')
      return original.apply(context, arguments);
    };
    
    $.extend(context[name], original);
  }
  
  rewriteSelector($, 'find', 0);
  rewriteSelector($, 'multiFilter', 0);
  rewriteSelector($.find, 'matchesSelector', 1);
  rewriteSelector($.find, 'matches', 0);
}(jQuery)