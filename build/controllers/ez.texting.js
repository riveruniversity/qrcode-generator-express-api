"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EzTextingController {
    constructor() {
        this.sendText = (request, response) => {
            //console.info("\x1b[33m%s\x1b[36m%s\x1b[0m", `[post] valid id: `, response.locals.validid);
            const USR = process.env.USR;
            const PSW = process.env.PSW;
            response.send();
        };
    }
    prepare(request, response, next) {
        next();
    }
    uploadQrCodeImage(request, response, next) { }
}
exports.default = new EzTextingController();
//# sourceMappingURL=ez.texting.js.map