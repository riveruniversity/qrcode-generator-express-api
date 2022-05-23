import { Router, Request, Response } from "express";
declare class QrCodeRouter {
    router: Router;
    showRouter: Router;
    constructor();
    badRequest: (req: Request, res: Response) => void;
    declined: (req: Request, res: Response) => void;
    forbidden: (req: Request, res: Response) => void;
}
declare const _default: QrCodeRouter;
export default _default;
