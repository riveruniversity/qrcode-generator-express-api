**QR Code Generator**
=====================

I created this repo to generate a nice qr code via API to be able to access it via static url.

There are way more options that you can add, but this was what I currently needed.

👉🏻 More options  [qr-code-styling-node](https://www.npmjs.com/package/qr-code-styling-node?activeTab=versions)

  

**Dependency**
--------------

  

*   [qr-code-styling-node](https://www.npmjs.com/package/qr-code-styling-node?activeTab=versions)
*   [Express.js](http://expressjs.com/)

  

Language
--------

  

*   TypeScript under `./src`
*   JavaScript under `./build`

  

**Install**
-----------

  

npm install

  

**Developer Mode**
------------------

  

[nodemon](https://nodemon.io/) watches file changes and reloads the server automatically.

  

npx nodemon src/server.ts

or

nodemon src/server.ts

  

**How to use**
--------------

  

1.  Style your QR code [here](https://qr-code-styling.com/)
2.  Export Options as JSON
3.  Add options to `qr.vars.ts` under `src/controllers/`

```javascript
export const myStyle = {

	width: 320,
    height: 320,
    ...
}
```

5.  Generate QR code: [http://localhost:1996/qr/create/1234567890](http://localhost:1996/qr/create/1234567890)
6.  Retrieve png file: [http://localhost:1996/qr/1234567890.png](http://localhost:1996/qr/1234567890.png)

  

**Examples**
------------


![](https://raw.githubusercontent.com/kozakdenys/qr-code-styling/master/src/assets/facebook_example_new.png)
![](https://raw.githubusercontent.com/kozakdenys/qr-code-styling/master/src/assets/qr_code_example.png)
![](https://raw.githubusercontent.com/kozakdenys/qr-code-styling/master/src/assets/telegram_example_new.png)

