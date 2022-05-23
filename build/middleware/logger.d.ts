import { Request, Response, NextFunction } from 'express';
declare type Middleware = (request: Request, response: Response, next: NextFunction) => void;
declare class Logger {
    log: Middleware;
    print(location: string, msg: string | any, color: number): void;
    done(request: Request, response: Response): void;
}
declare const _default: Logger;
export default _default;
