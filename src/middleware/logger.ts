import { Request, Response, NextFunction } from 'express';

import { color, log } from "../conf";

type Middleware = (request: Request, response: Response, next: NextFunction) => void;


class Logger {


    log: Middleware = (request: Request, response: Response, next: NextFunction) => {
        console.info("\x1b[35m%s\x1b[37m%s\x1b[0m", `[logger] `, `${request.method} ${request.path}`);
        next();
    }

    public print(location: string, msg: string | any, color: number) {

        console.info(`\x1b[${color}m[%s] \x1b[36m%s\x1b[0m`, location, msg);
    }

    public done(request: Request, response: Response) {

        console.log(`\x1b[${color.green}m[%s] \x1b[36m%s\x1b[0m`, "app", "successful completed ✔️");
    }

}

export default new Logger();