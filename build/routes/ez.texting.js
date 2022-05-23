"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ez_texting_1 = require("../controllers/ez.texting");
class EzTextingRouter {
    constructor() {
        this.declined = (req, res) => {
            res.status(406).json({
                status: 406,
                message: "Not Acceptable: id didn't meet the requirements",
            });
        };
        this.badRequest = (req, res) => {
            res.status(400).json({
                status: 400,
                message: "Bad Request: expected an id",
            });
        };
        this.forbidden = (req, res) => {
            res.status(403).json({
                status: 403,
                message: "Forbidden",
            });
        };
        this.router = (0, express_1.Router)();
        this.router.get("/:code([0-9]{4,10})", ez_texting_1.default.prepare);
        this.router.get("/:code", this.declined);
        this.router.get("/", this.badRequest);
        this.router.get("*", this.forbidden);
    }
}
exports.default = new EzTextingRouter();
//# sourceMappingURL=ez.texting.js.map