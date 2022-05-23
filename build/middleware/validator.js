"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validator {
    constructor() {
        this.validator = (request, response, next) => {
            this.validate(request, response);
            next();
        };
    }
    validate(request, response) {
        console.info("\x1b[35m%s\x1b[37m%s\x1b[0m", `[validator] `, `validating some submitted data`);
    }
}
exports.default = new Validator();
//# sourceMappingURL=validator.js.map