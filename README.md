# jquery.role — jQuery plugin to provide easy way to handle DOM elements by role attribute

This project uses [Semantic Versioning](http://semver.org/) for release numbering.

Sponsored by [Evil Martians](http://evilmartians.com/).

## Downloads

* [jquery.role.min.js](https://raw.github.com/kossnocorp/role/master/lib/jquery.role.min.js)
* [role.min.js](https://raw.github.com/kossnocorp/role/master/lib/jquery.role.min.js)
* [jquery.role.js](https://raw.github.com/kossnocorp/role/master/lib/jquery.role.js)
* [role.js](https://raw.github.com/kossnocorp/role/master/lib/role.js)
* [jquery.role.coffee](https://raw.github.com/kossnocorp/role/master/src/jquery.role.coffee)
* [role.coffee](https://raw.github.com/kossnocorp/role/master/src/role.coffee)

Also you can add jquery.role.js and role.js by bundle `role-rails` gem. For futher details see *installation* section below.

## Use `role` attribute FTW

```
Use cases for a role attribute for HTML5, include:

* accessibility,
* device adaptation,
* server-side processing, and
* complex data description.
```

This is a quote from [W3C Specification on Role attribute](http://www.w3.org/wiki/PF/XTech/HTML5/RoleAttribute#A_Role_Attribute_for_HTML5).

In [Evil Martians](http://evilmartians.com/) we came up with a way to use this attribute for our own purposes.

Say you have to update your website page design. HTML markup is done and you have to apply it to the existing site. Of course this marvelous page is crammed with Javascript code tied to an existing structure.

``` javascript
$('.list .item img')
    .mouseenter(function () {
        $(this).rotateTo(30, 300)
    })
    .mouseleave(function () {
        $(this).rotateTo(0, 300)
    });
```

Obviously, you'll have to rewrite all the selectors for the new layout. And it would be nice if you had to fix only one (or even ten) of these selectors. In reality, most likely, there will be several dozen of them.

Another issue is that refactoring process requires you to change the names or a number of classes. You'll have to muddle through every JS file to find all classes you are going to change.

And, of course, in both cases the end result is absolutely unpredictable, because layout alone is not enougn to figure out if a class is actualy used in JS.

The `.js-class_name` prefix use may seem like a good idea, except that someone will surely add styles to this class in a future... Let alone the difficulty to spot, among a large of number of classes, one with a prefix.

In order to avoid this problems, we can "attach" JS to DOM elements by a `role` attribute.

It's a lot safer then prefixes, beacause it's much harder to attach styles to `role` and it feals morally difficult to break the `role` use convention.

With the use of `role`, layout update becomes very straightforward: you just have to add roles to a new element, and if you are not tied to the "magic numbers" -- it will work with no further hassle.

To make life easier (shoutout to [@alex_chrome](https://twitter.com/#!/alex_chrome) for the great idea) we also extended jQuery selector syntax:

``` javascript
$('@list @item @image')
    .mouseenter(function () {
        $(this).rotateTo(30, 300)
    })
    .mouseleave(function () {
        $(this).rotateTo(0, 300)
    });
```

`$('@list @item @image')` is the same as `$('[role="list"] [role="item] [role="image"]')` and you can use "multirole": `$('@list@coupons')`.

In addition to the jQuery plug-in, I also wrote a version that extends `querySelectorAll` of [Zepto.js](http://zeptojs.com/) with a Role functionality.

Using of 'role' in a query may work a bit slower compared to usual selectors, but it's neglectable even in a large number of queries.

In addition to `role`, I sometimes use `id`, but only in very extraodinary cases — because if there is only single element on a page today, it may happen that there will be a few tomorrow, even if that wasn't planned.

## Usage

### Using selectors

You can use shortcut `@` in jQuery selectors to find elements with roles.

Will select all elements in document with `role="ajax-link"`:

``` js
$('@ajax-link')
```

Also you can combinate roles:

`<form role="from login_form"></form>`:

``` js
$('@form@login_form')
```

Will select all forms with "form" as role `<form role="from login_form"></form><form role="from registration_form"></form>`:

``` js
$('@form')
```

You can combine role with other selectors, but that is not recommended:

`<form class="dark" role="login_form" method="post"></form>`:

``` js
$('form.dark@login_form[method=post]')
```

## Installation

Coming soon.

## Roadmap

### 1.1.0

* Turn on configurable attribute shortcuts for Slim in role-rails (#14)

### 1.2.0

* Add `@role_name.some_class` shortcut to Haml

### 1.3.0

* Optional usage of `data-role` instead `role`.
* Better docs

### 1.4.0

* Optimization
* More tests

## Changelog

### 1.0.2 (March 14, 2012)

* Fixes problem in Internet Explorer 8 in jquery.role.js and role.js (issue #11) (thanks @igor-alexandrov for help)

### 1.0.1 (January 27, 2012)

* Fixes problem with multiple roles in Firefox 8 and later (issue #9)

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

Special thanks to @skfd and @yaroslav for helping with this README.

## License

The MIT License

Copyright (c) 2011 Sasha Koss

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
