# unescape-js

> Unescape special characters encoded with [JavaScript escape sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings)

## Install

```
npm install --save unescape-js
```
    
## Usage

`unescape-js` supports all JavaScript escape sequences including ES2015 Unicode code point escapes (`\u{XXXXX}`). 

```js
var unescapeJs = require('unescape-js');

console.log(unescapeJs('Hello,\\nworld!'));
// Hello,
// world!

console.log(unescapeJs('Copyright \\u00A9'));
// Copyright ©

console.log(unescapeJs('\\u{1F604}'));
// 😄
```

## License

MIT © [Ivan Akulov](http://iamakulov.com)