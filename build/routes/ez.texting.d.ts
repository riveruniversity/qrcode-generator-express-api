import { Router, Request, Response } from "express";
declare class EzTextingRouter {
    router: Router;
    constructor();
    declined: (req: Request, res: Response) => void;
    badRequest: (req: Request, res: Response) => void;
    forbidden: (req: Request, res: Response) => void;
}
declare const _default: EzTextingRouter;
export default _default;
