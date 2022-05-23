"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express = require("express");
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
// import custom module
const routes_1 = require("./routes/routes");
const logger_1 = require("./middleware/logger");
class Server {
    constructor() {
        this.app = express();
        this.initMiddlewares();
        this.initViewEngine();
        this.initStatic();
        this.initRoutes();
    }
    initStatic() {
        this.app.use(express.static(path.resolve('./public')));
        this.app.use('/load', express.static('public/qr'));
    }
    initRoutes() {
        this.app.use(routes_1.default.router);
    }
    initViewEngine() {
        this.app.set('views', __dirname + '/views');
        this.app.set('view engine', 'pug');
    }
    initMiddlewares() {
        // attach Logger
        this.app.use(logger_1.default.log);
        // parsing application/json
        this.app.use(bodyparser.json());
        // parsing application/xwww-form-urlencoded
        this.app.use(bodyparser.urlencoded({ extended: true }));
    }
    start(port) {
        const server = this.app.listen(port, () => {
            console.info("\x1b[33m%s\x1b[36m%s\x1b[0m", `[script] app running on port `, port, "🚀");
        });
        server.on('error', e => console.error("Error", e));
    }
}
exports.default = new Server();
// Logger Colors
// 30 black
// 31 red
// 32 green
// 33 yellow
// 34 dark blue
// 35 purple
// 36 turquoise
// 37 white
//# sourceMappingURL=app.js.map