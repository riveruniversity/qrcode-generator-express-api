import { Request, Response, NextFunction } from "express";

import * as QRCode from "qrcode";
import { QRCodeToFileOptions } from "qrcode";

import { color, log } from "../conf";
import { myStyle } from "./qr.vars";

const {	QRCodeStyling } = require("qr-code-styling-node/lib/qr-code-styling.common.js");
const nodeCanvas = require("canvas");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require('path')

import { open } from "fs/promises";

class CodeGeneratorController {
	async generateHtml(
		request: Request,
		response: Response,
		next: NextFunction
	): Promise<void> {
		if (request.query.file) {
			next();
			return;
		}

		const getQr = new Promise((resolve, reject) => {
			QRCode.toDataURL(request.params.barcode, (err: any, url: string) =>
				resolve(url)
			);
		});

		getQr.then((url) => response.render("qr", { url: url }));
	}

	async generateBuffer(request: Request, response: Response) {
		const qr = await QRCode.toBuffer(request.params.barcode, {
			width: 350,
			margin: 1,
			scale: 4,
		});

		response.writeHead(200, {
			"Content-Type": "image/png",
			"Content-Length": qr.length,
		});
		response.end(qr);
	}

	async generateFile(request: Request, response: Response) {
		const options: QRCodeToFileOptions = {
			color: {
				dark: "#00F", // Blue dots
				light: "#0000", // Transparent background
			},
			width: 350,
			margin: 1,
			scale: 4,
		};

		const filename =
			__dirname + "/../public/qr/" + request.params.barcode + ".png";

		let file;
		file = await open(filename, "w+");
		file.close();

		const qr = QRCode.toFile(
			filename,
			request.params.barcode,
			options,
			function (err) {
				if (err) throw err;
				console.log("done");
			}
		);
		response.send(qr);
	}

	async style(request: Request, response: Response, next: NextFunction) {
		
		if (request.params.format != 'png') {

			response.end("Currently only PNG supported. You may add more support under 'controllers/qr.generator.ts'");
			return
		}
		
		myStyle.data = request.params.barcode

		// For canvas type
		const qrCodeImage = new QRCodeStyling({
			nodeCanvas, // this is required
			...myStyle,
		});

        const buffer = await qrCodeImage.getRawData(request.params.format)

		const filename = path.resolve('./public/qr') + '/' + request.params.barcode + "." + request.params.format;
        fs.writeFileSync(filename, buffer, {flag: 'w+'});

		
		// Response in downloadable image file
		// ---------------------------------
        response.writeHead(200, {
            "Content-Type": "image/"+ request.params.format,
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
	}
}
export const CodeGenerator = new CodeGeneratorController();