import { Request, Response, NextFunction } from 'express';

type Middleware = (request: Request, response: Response, next: NextFunction) => any;


class Validator {

    validator: Middleware;

    constructor() {
        this.validator = (request: Request, response: Response, next: NextFunction) => {

            this.validate(request, response);
            next();
        }
    }

    validate (request: Request, response: Response) {

        console.info("\x1b[35m%s\x1b[37m%s\x1b[0m", `[validator] `, `validating some submitted data`);
    }
}

export default new Validator();