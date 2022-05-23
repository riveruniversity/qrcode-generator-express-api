import { Request, Response, NextFunction } from 'express';
declare type Middleware = (request: Request, response: Response, next: NextFunction) => any;
declare class Validator {
    validator: Middleware;
    constructor();
    validate(request: Request, response: Response): void;
}
declare const _default: Validator;
export default _default;
