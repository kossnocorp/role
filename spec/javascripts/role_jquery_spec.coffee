describe 'jQuery Role', ->

  beforeEach ->
    loadFixtures('base.html')

  it 'should find elemenets by role using @ alias', ->
    expect(
      $('@some_role').get(0)
    ).toBe(
      $('[role="some_role"]').get(0)
    )

  it 'should allow to use multiply roles', ->
    expect(
      $('@role_one').get(0)
    ).toBe(
      $('#element_two').get(0)
    )
    expect(
      $('@role_one@role_two').get(0)
    ).toBe(
      $('#element_two').get(0)
    )
    expect(
      $('@role_one').get(0)
    ).toBe(
      $('#element_two').get(0)
    )
    expect(
      $('@role_two').get(0)
    ).toBe(
      $('#element_two').get(0)
    )

  it 'should allow to combine roles with id and classes', ->
    expect(
      $('div#element_one.awesome_div@some_role').get(0)
    ).toBe(
      $('#element_one').get(0)
    )

  it 'should allow to use roles in nested selectors', ->
    expect(
      $('@role_one @role_three').get(0)
    ).toBe(
      $('#element_three').get(0)
    )

  it 'should work with $.fn.is', ->
    expect( $('@some_role').is('@some_role') ).toBe(true)
    expect( $('@role_one').is('@role_one') ).toBe(true)
    expect( $('@role_two').is('@role_one') ).toBe(true)
