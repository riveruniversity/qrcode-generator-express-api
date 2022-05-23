"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const app_1 = require("./app");
dotenv.config();
const PORT = process.env.PORT;
app_1.default.start(PORT);
//# sourceMappingURL=server.js.map