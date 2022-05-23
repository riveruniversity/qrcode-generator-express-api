"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGenerator = void 0;
const tslib_1 = require("tslib");
const QRCode = require("qrcode");
const qr_vars_1 = require("./qr.vars");
const { QRCodeStyling } = require("qr-code-styling-node/lib/qr-code-styling.common.js");
const nodeCanvas = require("canvas");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require('path');
const promises_1 = require("fs/promises");
class CodeGeneratorController {
    generateHtml(request, response, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (request.query.file) {
                next();
                return;
            }
            const getQr = new Promise((resolve, reject) => {
                QRCode.toDataURL(request.params.barcode, (err, url) => resolve(url));
            });
            getQr.then((url) => response.render("qr", { url: url }));
        });
    }
    generateBuffer(request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const qr = yield QRCode.toBuffer(request.params.barcode, {
                width: 350,
                margin: 1,
                scale: 4,
            });
            response.writeHead(200, {
                "Content-Type": "image/png",
                "Content-Length": qr.length,
            });
            response.end(qr);
        });
    }
    generateFile(request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const options = {
                color: {
                    dark: "#00F",
                    light: "#0000", // Transparent background
                },
                width: 350,
                margin: 1,
                scale: 4,
            };
            const filename = __dirname + "/../public/qr/" + request.params.barcode + ".png";
            let file;
            file = yield (0, promises_1.open)(filename, "w+");
            file.close();
            const qr = QRCode.toFile(filename, request.params.barcode, options, function (err) {
                if (err)
                    throw err;
                console.log("done");
            });
            response.send(qr);
        });
    }
    style(request, response, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (request.params.format != 'png') { // 'png' 'jpeg' 'webp' 'svg'
                response.end("Currently only PNG supported. You may add more support under 'controllers/qr.generator.ts'");
                return;
            }
            qr_vars_1.myStyle.data = request.params.barcode;
            // For canvas type
            const qrCodeImage = new QRCodeStyling(Object.assign({ nodeCanvas }, qr_vars_1.myStyle));
            const buffer = yield qrCodeImage.getRawData(request.params.format);
            const filename = path.resolve('./public/qr') + '/' + request.params.barcode + "." + request.params.format;
            fs.writeFileSync(filename, buffer, { flag: 'w+' });
            // Response in downloadable image file
            // ---------------------------------
            response.writeHead(200, {
                "Content-Type": "image/" + request.params.format,
                "Content-Length": buffer.length,
            });
            response.end(buffer);
            // or 
            // Response in rendered html file
            // ---------------------------------
            //const base64 = buffer.toString('base64')
            //const src = `data:image/png;base64,${base64}`
            //response.render("qr", { url: src})
            next();
        });
    }
}
exports.CodeGenerator = new CodeGeneratorController();
//# sourceMappingURL=qr.generator.js.map