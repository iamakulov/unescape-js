# unescape-js

[![Build Status][travis-img]][travis-url]
[![Coverage][cov-img]][cov-url]
[![code style: prettier][prettier-img]][prettier-url]
[![All Contributors][contributors-img]][contributors-url]
[![licence][licence-img]][licence-url]

> Unescape special characters encoded with [JavaScript escape sequences](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings)

## Install

```sh
npm i unescape-js
```

```js
// consume via CommonJS require():
const unescapeJs = require("unescape-js");
// or import as an ES module:
import unescapeJs from "unescape-js";
```

**[⬆ &nbsp;back to top](#)**

## Usage

`unescape-js` supports:

* all JavaScript escape sequences described [on the according MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings) including ES2015 Unicode code point escapes (`\u{XXXXX}`)
* Python-style escape sequences (`\UXXXXXXXX`).

```js
const unescapeJs = require("unescape-js");

console.log(unescapeJs("Hello,\\nworld!"));
// Hello,
// world!

console.log(unescapeJs("Copyright \\u00A9"));
// Copyright ©

console.log(unescapeJs("\\u{1F604}"));
// 😄
```

**[⬆ &nbsp;back to top](#)**

## Contributors

Thanks goes to these wonderful people (hover the cursor over contribution icons for a tooltip to appear):

<!-- Contributors START
Ivan_Akulov iamakulov http://iamakulov.com/ code tests doc
Robert_Hafner tedivm http://www.tedivm.com/ code tests
Anna_Henningsen addaleax https://twitter.com/addaleax code tests
Roy_Revelt revelt https://github.com/revelt code tests doc
Contributors END -->

<!-- Contributors table START -->

| [<img src="https://avatars.githubusercontent.com/iamakulov?s=100" width="100" alt="Ivan Akulov" /><br /><sub>Ivan Akulov</sub>](http://iamakulov.com/)<br />[💻](https://github.com/iamakulov/unescape-js/commits?author=iamakulov) [⚠️](https://github.com/iamakulov/unescape-js/commits?author=iamakulov) [📖](https://github.com/iamakulov/unescape-js/commits?author=iamakulov) | [<img src="https://avatars.githubusercontent.com/tedivm?s=100" width="100" alt="Robert Hafner" /><br /><sub>Robert Hafner</sub>](http://www.tedivm.com/)<br />[💻](https://github.com/iamakulov/unescape-js/commits?author=tedivm) [⚠️](https://github.com/iamakulov/unescape-js/commits?author=tedivm) | [<img src="https://avatars.githubusercontent.com/addaleax?s=100" width="100" alt="Anna Henningsen" /><br /><sub>Anna Henningsen</sub>](https://twitter.com/addaleax)<br />[💻](https://github.com/iamakulov/unescape-js/commits?author=addaleax) [⚠️](https://github.com/iamakulov/unescape-js/commits?author=addaleax) | [<img src="https://avatars.githubusercontent.com/revelt?s=100" width="100" alt="Roy Revelt" /><br /><sub>Roy Revelt</sub>](https://github.com/revelt)<br />[💻](https://github.com/iamakulov/unescape-js/commits?author=revelt) [⚠️](https://github.com/iamakulov/unescape-js/commits?author=revelt) [📖](https://github.com/iamakulov/unescape-js/commits?author=revelt) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- Contributors table END -->

This project follows the [all-contributors][all-contributors-url] specification. Contributions of any kind are welcome!

**[⬆ &nbsp;back to top](#)**

## License

MIT © [Ivan Akulov](http://iamakulov.com)

[travis-img]: https://img.shields.io/travis/iamakulov/unescape-js.svg?style=flat-square
[travis-url]: https://travis-ci.org/iamakulov/unescape-js
[cov-img]: https://coveralls.io/repos/github/iamakulov/unescape-js/badge.svg?style=flat-square?branch=master
[cov-url]: https://coveralls.io/github/iamakulov/unescape-js?branch=master
[prettier-img]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[contributors-img]: https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square
[contributors-url]: #contributors
[licence-img]: https://img.shields.io/npm/l/unescape-js.svg?style=flat-square
[licence-url]: https://github.com/iamakulov/unescape-js/blob/master/LICENCE
[all-contributors-url]: https://github.com/kentcdodds/all-contributors
