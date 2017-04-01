nodejs-sdk
===
>  Backand SDK for [Node.js](https://nodejs.org/).
This SDK enables you to communicate comfortably and quickly with your Backand app.
It wraps the [vanilla-sdk](https://github.com/backand/vanilla-sdk) to allow easier work on projects involving Node.js.


## Installation
To install the Node.js SDK, use the correct command for your dependency management platform:

| Provider | Command |
| -------- | ------- |
| npm | `$ npm i -S @backand/nodejs-sdk` |
| yarn | `$ yarn add @backand/nodejs-sdk` |


## Import
Use the following import statement to include the Node.js SDK in your project:

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

Review the full API reference at our [vanilla-sdk's github](https://github.com/backand/vanilla-sdk) to get started with your back end!


## Examples
***To view the demo, just run npm start - [example page](https://github.com/backand/nodejs-sdk/blob/master/example/).***


## License

  [MIT](LICENSE)
