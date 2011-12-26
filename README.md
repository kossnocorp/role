# jquery.role — jQuery plugin to provide easy way to handle DOM elements by role attribute

This project uses [Semantic Versioning](http://semver.org/) for release numbering.

Sponsored by [Evil Martians](http://evilmartians.com/).

## Idea behind this piece of code

I start using role attrbute (`<div role="role_name"></div>`) to handle DOM elements.

![Y U NO USE CLASSES?](https://github.com/kossnocorp/role/raw/master/doc/yuno.png)

Some reasons:

* Markup-guys always change classes and class names (and this is ok)
* It's hard to know this class is used for JavaScript or not?
* And finally: semantic

## Usage

### Using selectors

You can use symbol '@' in jQuery selectors to find elements with roles

Will select all elements in document with `role="ajax-link"`:

``` js
$('@ajax-link');
``

`<form role="login_form"></form>`:

``` js
$('form@login_form');
```

`<form class="dark" role="login_form"></form>`:

``` js
$('form.dark@login_form');
```

`<form class="dark" role="login_form" method="post"></form>`:

``` js
$('form.dark@login_form[method=post]');
```

`<form class="dark" role="login_form ajax_form" method="post"></form>`:

``` js
$('form.dark@login_form@ajax_form[method=post]');
```

## Roadmap

### 1.1.0

* Optional usage of `data-role` instead `role`.

## Changelog

### 1.0.0 (December 26, 2011)

* Remove depricated function
* Rewrite in CoffeeScript

### 0.4.1 (December 8, 2011)

* Fix issue #8

### 0.4.0 (December 8, 2011)

* Added specs for jQuery Role
* Selectors performance improvement for modern browsers (also covers #6)
* Role extension for querySelectorAll function (`src/role.coffee`)

### 0.3.2 (June 2, 2011)

* Reverted changes made in 0.3.1 because issue #6

### 0.3.1 (May 24, 2011)

* Selectors performance improvement for modern browsers

### 0.3.0 (May 23, 2011)

* Added native Sizzle selectors support (`$('@ajax_link')`)

### 0.2.0 (May 20, 2011)

* Added mechanism to pick roles by element id

### 0.1.0 (May 05, 2011)

* Initial release

## Contributors

Original idea by @kossnocorp and @ai.

* @kossnocorp
* @chrome

## License

The MIT License

Copyright (c) 2011 Sasha Koss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
