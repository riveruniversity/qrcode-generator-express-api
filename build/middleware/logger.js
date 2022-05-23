"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("../conf/conf");
class Logger {
    constructor() {
        this.log = (request, response, next) => {
            console.info("\x1b[35m%s\x1b[37m%s\x1b[0m", `[logger] `, `${request.method} ${request.path}`);
            next();
        };
    }
    print(location, msg, color) {
        console.info(`\x1b[${color}m[%s] \x1b[36m%s\x1b[0m`, location, msg);
    }
    done(request, response) {
        console.log(`\x1b[${conf_1.color.green}m[%s] \x1b[36m%s\x1b[0m`, "app", "successful completed ✔️");
    }
}
exports.default = new Logger();
//# sourceMappingURL=logger.js.map