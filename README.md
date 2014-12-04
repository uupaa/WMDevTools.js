# WMDevelop.js [![Build Status](https://travis-ci.org/uupaa/WMDevelop.js.png)](http://travis-ci.org/uupaa/WMDevelop.js)

[![npm](https://nodei.co/npm/uupaa.wmdevelop.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.wmdevelop.js/)

development functions.

## Document

- [WMDevelop.js wiki](https://github.com/uupaa/WMDevelop.js/wiki/WMDevelop)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Browser

```js
<script src="lib/WMDevelop.js"></script>
<script>
console.log( WMDevelop() );
</script>
```

### WebWorkers

```js
importScripts("lib/WMDevelop.js");

console.log( WMDevelop() );
```

### Node.js

```js
var WMDevelop = require("lib/WMDevelop.js");

console.log( WMDevelop() );
```
