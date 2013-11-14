Derby Github Buttons
====================

A Derby component library for the [Unofficial Github Buttons](https://github.com/mdo/github-buttons).
Refer to their documentation for more details.

Installation
------------

    $ npm install derby-ui-github-buttons

In *"lib/app/index.js"* include:

    app.use(require('derby-ui-github-buttons'));

Usage
-----

In your view include:

    <ghbtns:button user="psirenny" repo="derby-ui-github-buttons" type="watch" width="100">

or better yet:

    <ghbtns:button giturl="https://github.com/psirenny/derby-ui-github-buttons.git" type="watch" width="100">


Options
-------

* ` count ` True if the count should be shown.
* ` domain ` The domain hosting the .html file. Defaults to *ghbtns.com*.
* ` filename ` The name of the .html file. Defaults to *github-btn.html*.
* ` fileurl ` The url to the .html file. This will override `secure`, `domain` and `filename`.
* ` giturl ` The url to the repository. This will override `user` and `repo`.
* ` height ` The height of the button. The default value depends on the button size.
* ` repo ` The name of the repository. **Required**
* ` secure ` True if the url should be in *https*. Defaults to false.
* ` size ` The size of the button.
* ` type ` The type of button. **Required**
* ` user ` The username of the repository owner. **Required**
* ` width ` The width of the button.