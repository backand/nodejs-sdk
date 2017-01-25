nodejs-sdk
===
[![npm version](https://img.shields.io/npm/v/@backand/nodejs-sdk.svg?style=flat-square)](https://www.npmjs.org/package/@backand/nodejs-sdk)
[![npm downloads](https://img.shields.io/npm/dt/@backand/nodejs-sdk.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@backand/nodejs-sdk)

>  Backand SDK for [Node.js](https://nodejs.org/).
This SDK enables you to communicate comfortably and quickly with your Backand app.
It wraps the [vanilla-sdk](https://github.com/backand/vanilla-sdk) to allow easier work on projects involving Node.js.


## Installation
- npm:
```bash
$ npm i -S @backand/nodejs-sdk
```
- yarn:
```bash
$ yarn add @backand/nodejs-sdk
```


## Import
```javascript
const backand = require('@backand/nodejs-sdk')
```


## Quick start
```javascript
backand.init({
  appName: 'APP_NAME',
  anonymousToken: 'ANONYMOUS_TOKEN'
});
```
**NOTE:**
**All methods except init are asynchronous (return Promise) so if you want to see their output, you have to worry that your node will not exit before they finish to run. (See [examples](https://github.com/backand/nodejs-sdk#examples))**


## Examples
***To view the demo, just run npm start - [example page](https://github.com/backand/nodejs-sdk/blob/master/example/).***


## License

  [MIT](LICENSE)
