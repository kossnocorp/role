# Role.js, extension for querySelectorAll function v1.0.0 ~ https://github.com/kossnocorp/role

for elm in [Document, Element]
  do (elm) ->
    nativeQuery = elm::querySelectorAll
    elm::querySelectorAll = (selector) ->
      nativeQuery.call( @, selector.replace(/@(\w+)/g, "[role~=\"$1\"]") )
