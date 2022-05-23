"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.color = void 0;
exports.color = {
    'black': 30,
    'red': 31,
    'green': 32,
    'yellow': 33,
    'dark blue': 34,
    'purple': 35,
    'turquoise': 36,
    'white': 37
};
function log(location, msg, color) {
    console.info(`\x1b[${color}m[%s] \x1b[36m%s\x1b[0m`, location, msg);
}
exports.log = log;
//# sourceMappingURL=conf.js.map