"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express = require("express");
const logger_1 = require("../middleware/logger");
const qr_generator_1 = require("../controllers/qr.generator");
class QrCodeRouter {
    constructor() {
        this.badRequest = (req, res) => {
            res.status(400).json({
                code: 400,
                status: "Bad Request",
                message: "expected code ...."
            });
        };
        this.declined = (req, res) => {
            res.status(406).json({
                code: 406,
                status: "Not Acceptable",
                message: "Add the file format ending '.png' or 'jpeg' 'webp' 'svg'. (currently only PNG)."
            });
        };
        this.forbidden = (req, res) => {
            res.status(403).json({
                code: 403,
                status: "Forbidden",
                message: "Forbidden"
            });
        };
        this.router = (0, express_1.Router)();
        this.showRouter = (0, express_1.Router)();
        this.router.use('/', express.static('public/qr'));
        this.router.get('/', this.badRequest);
        this.router.use('/show', this.showRouter.use('/', express.static('public/qr')));
        this.router.get('/', this.badRequest);
        this.router.get("/create/:barcode.:format", qr_generator_1.CodeGenerator.style, logger_1.default.done);
        this.router.get("/create/:barcode", this.declined);
        this.router.all("*", this.forbidden);
    }
}
exports.default = new QrCodeRouter();
//# sourceMappingURL=qr.code.js.map