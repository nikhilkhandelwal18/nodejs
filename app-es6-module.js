import * as greetr from './es6-modules/greet';
greetr.greet();

/**
 * While import is indeed part of ES6, it is unfortunately not yet supported by any native environments, Node or browser.

See browser compat table on MDN and this Node issue.

Until support shows up natively, you'll have to continue using classic require statements:

const express = require("express");
If you really want to use new ES6/7 features in NodeJS, you can compile it using Babel. Here's an example server.
 * 
 */