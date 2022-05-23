"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGenerator = void 0;
const nodeCanvas = require("canvas");
const { JSDOM } = require("jsdom");
const fs = require("fs");
class CodeGeneratorController {
    constructor() {
        this.createAPost = (request, response) => {
            //console.info("\x1b[33m%s\x1b[36m%s\x1b[0m", `[post] valid id: `, response.locals.validId);
            response.send();
        };
    }
    style(request, response, next) {
        response.send(request.params);
    }
    generate(request, response, next) {
        console.log(request.params);
        response.send(request.params);
    }
    verifyStudentId(request, response, next) {
        next();
    }
}
class CodeStylerController {
}
exports.CodeGenerator = new CodeGeneratorController();
//# sourceMappingURL=qr.code.js.map