import * as dotenv from 'dotenv';
import Server from './app'

dotenv.config();
const PORT:any = process.env.PORT;

Server.start(PORT)
