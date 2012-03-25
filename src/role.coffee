# Role.js, extension for querySelectorAll function v1.0.2 ~ https://github.com/kossnocorp/role

elements = []
elements << Document if Document?
elements << Element if Element?

for elm in elements
  do (elm) ->
    nativeQuery = elm::querySelectorAll
    elm::querySelectorAll = (selector) ->
      nativeQuery.call( @, selector.replace(/@(\w+)/g, "[role~=\"$1\"]") )