import { Application } from "express";
declare class Server {
    app: Application;
    constructor();
    private initStatic;
    private initRoutes;
    private initViewEngine;
    private initMiddlewares;
    start(port: number): void;
}
declare const _default: Server;
export default _default;
