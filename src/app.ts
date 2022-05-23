import { Application } from "express";
import * as express from "express";
import * as bodyparser from 'body-parser'
import * as path from 'path'

// import custom module
import Routes from "./routes/routes";
import Logger from "./middleware/logger";

class Server {
    app: Application;

    constructor() {
        this.app = express();
        this.initMiddlewares();
        this.initViewEngine();
        this.initStatic();
        this.initRoutes();
    }

    private initStatic() {

        var options = {
            dotfiles: 'ignore',
            extensions: ['png', 'jpeg', 'webp', 'svg'],
            index: false,
            redirect: false,
          }
        this.app.use(express.static(path.resolve('./public'), options))
    }

    private initRoutes() {
        //this.app.use('/qr', express.static('public/qr')) works
        this.app.use(Routes.router);
    }

    private initViewEngine() {
        this.app.set('views', __dirname + '/views')
        this.app.set('view engine', 'pug')
    }

    private initMiddlewares() {

        // attach Logger
        this.app.use(Logger.log);

        // parsing application/json
        this.app.use(bodyparser.json()); 

        // parsing application/xwww-form-urlencoded
        this.app.use(bodyparser.urlencoded({ extended: true })); 
    }

    public start(port: number) {
        const server = this.app.listen(port, () => {

            console.info("\x1b[33m%s\x1b[36m%s\x1b[0m", `[script] app running on port `, port, "🚀");
          });
        server.on('error', e => console.error("Error", e));
    }
}

export default new Server();

// Logger Colors
// 30 black
// 31 red
// 32 green
// 33 yellow
// 34 dark blue
// 35 purple
// 36 turquoise
// 37 white