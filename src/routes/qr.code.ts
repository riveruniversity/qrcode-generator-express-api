import { Router, Request, Response } from "express";
import * as express from "express";
import * as path from 'path'

import Logger from "../middleware/logger";
import { CodeGenerator } from "../controllers/qr.generator";

class QrCodeRouter {
	router: Router;
	showRouter: Router;

	constructor() {
		this.router = Router();
		this.showRouter = Router();

		this.router.use('/', express.static('public/qr'))
		this.router.get('/', this.badRequest);
		this.router.use('/show', this.showRouter.use('/', express.static('public/qr')))

		this.router.get('/', this.badRequest);
		this.router.get("/create/:barcode.:format", CodeGenerator.style, Logger.done);
		this.router.get("/create/:barcode", this.declined);
		this.router.all("*", this.forbidden);
	}

	badRequest = (req: Request, res: Response) => {
		res.status(400).json({
			code: 400,
			status: "Bad Request",
			message: "expected code ...."
		});
	};

	declined = (req: Request, res: Response) => {
		res.status(406).json({
			code: 406,
			status: "Not Acceptable",
			message: "Add the file format ending '.png' or 'jpeg' 'webp' 'svg'. (currently only PNG)."
		});
	};

	forbidden = (req: Request, res: Response) => {
		res.status(403).json({
			code: 403,
			status: "Forbidden",
			message: "Forbidden"
		});
	};
}

export default new QrCodeRouter();
