###
  Role extension to querySelectorAll function.

  Works only in modern browsers.
  Perfectly in usage with Zepto.js or similar library

  Version: 0.4.0
  Copyright (c) 2011 Sasha Koss
###

for elm in [Document, Element]
  do (elm) ->
    nativeQuery = elm::querySelectorAll
    elm::querySelectorAll = (selector) ->
      nativeQuery.call( @, selector.replace(/@(\w+)/g, "[role~=\"$1\"]") )
