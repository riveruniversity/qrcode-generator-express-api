import { Request, Response, NextFunction } from "express";
declare class EzTextingController {
    constructor();
    prepare(request: Request, response: Response, next: NextFunction): void;
    uploadQrCodeImage(request: Request, response: Response, next: NextFunction): void;
    sendText: (request: Request, response: Response) => void;
}
declare const _default: EzTextingController;
export default _default;
