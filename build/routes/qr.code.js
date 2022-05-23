"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logger_1 = require("../middleware/logger");
//import { CodeGenerator } from "../controllers/qr.code";
const qr_generator_1 = require("../controllers/qr.generator");
class QrCodeRouter {
    constructor() {
        this.badRequest = (req, res) => {
            console.log(req);
            res.status(400).json({
                status: 400,
                message: "Bad Request: expected a code number",
            });
        };
        this.declined = (req, res) => {
            res.status(406).json({
                status: 406,
                message: "Not Acceptable: code didn't meet the requirements",
            });
        };
        this.forbidden = (req, res) => {
            res.status(403).json({
                status: 403,
                message: "Forbidden",
            });
        };
        this.router = (0, express_1.Router)();
        this.router.get("/", this.badRequest);
        //this.router.get("/style", CodeGenerator.style);
        this.router.get("/:barcode([0-9]{3,32})", qr_generator_1.CodeGenerator.style, logger_1.default.done);
        this.router.get("/:barcode", this.declined);
        this.router.all("*", this.forbidden);
    }
}
exports.default = new QrCodeRouter();
//# sourceMappingURL=qr.code.js.map