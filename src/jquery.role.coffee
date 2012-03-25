# Role.js, jQuery adapter v1.0.2 ~ https://github.com/kossnocorp/role

do ($ = jQuery) ->

  $.expr.match['ROLE'] = /@((?:[\w\u00c0-\uFFFF\-]|\\.)+)/

  $.expr.preFilter['ROLE'] = (match) -> ' ' + match[1] + ' '

  $.expr.filter['ROLE'] = (el, match) ->
    el.getAttribute? and " #{el.getAttribute('role')} ".indexOf(match) != -1

  for type of $.expr.match
    $.expr.match[type] = new RegExp( $.expr.match[type].source + (/(?![^\[]*\])(?![^\(]*\))/.source) )
    $.expr.leftMatch[type] = new RegExp(
      /(^(?:.|\r|\n)*?)/.source +
      $.expr.match[type].source.replace(
        /\\(\d+)/g
        (all, num) -> "\\" + (num - 0 + 1)
      )
    )

  # Monkey patch for `$.find.matchesSelector`
  #
  # Usage of Element.mozMatchesSelector was been cause of bugs in Firefox 3.6
  # https://developer.mozilla.org/en/DOM/Node.mozMatchesSelector
  #
  # Related issue: https://github.com/kossnocorp/role/issues/8
  if not document.documentElement.matchesSelector? and document.documentElement.mozMatchesSelector?
    matchesSelectorOrigin = $.find.matchesSelector
    $.find.matchesSelector = (node, expr) ->
      matchesSelectorOrigin(
        node
        expr.replace(
          /(@[\w\-]+)/g
          ($0) -> $0.replace( /^@([\w\-]+)$/, (__, $1) -> "[role~=\"#{$1}\"]" )
        )
      )
