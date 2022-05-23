import { Router, Request, Response} from "express";

// Controllers
import QrCodeRouter from "./qr.code";

class Routes {

  router: Router;

  constructor () { 
    this.router = Router();
    this.direct();
  }

  private direct () {

    this.router.get("/", this.index());
    this.router.use("/qr", QrCodeRouter.router);
  }
  
  public index(): Router {
    
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).send({
        id: '1',
        name: 'qrcode-generator',
        server: 'is running'
      });
    });
    return this.router;
  }

}
  
export default new Routes();