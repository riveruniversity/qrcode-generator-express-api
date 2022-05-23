import { Router, Request, Response } from "express";
import * as express from "express";
import * as path from 'path'

import Logger from "../middleware/logger";
import { CodeGenerator } from "../controllers/qr.generator";

class QrCodeRouter {
	router: Router;

	constructor() {
		this.router = Router();

		this.router.use('/', express.static('public/qr'))
		//this.router.use('/load/', express.static('public/qr'))
		//this.router.use('/load', express.static(__dirname + '/public/qr'))

		this.router.get('/', this.badRequest);
		this.router.get("/create/:barcode", CodeGenerator.style, Logger.done);
		this.router.get("/create/:barcode", this.declined);
		this.router.all("*", this.forbidden);
	}

	badRequest = (req: Request, res: Response) => {
		res.status(400).json({
			status: 400,
			message: "Bad Request: expected a code number",
		});
	};

	declined = (req: Request, res: Response) => {
		res.status(406).json({
			status: 406,
			message: "Not Acceptable: code didn't meet the requirements",
		});
	};

	forbidden = (req: Request, res: Response) => {
		res.status(403).json({
			status: 403,
			message: "Forbidden",
		});
	};
}

export default new QrCodeRouter();
