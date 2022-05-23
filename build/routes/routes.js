"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controllers
const qr_code_1 = require("./qr.code");
class Routes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.direct();
    }
    direct() {
        this.router.get("/", this.index());
        this.router.use("/qr", qr_code_1.default.router);
    }
    index() {
        this.router.get("/", (req, res) => {
            res.status(200).send({
                id: '1',
                name: 'qrcode-generator',
                server: 'is running'
            });
        });
        return this.router;
    }
}
exports.default = new Routes();
//# sourceMappingURL=routes.js.map