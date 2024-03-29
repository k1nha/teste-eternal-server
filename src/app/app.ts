import express from 'express';
import cors from 'cors';
import router from '../routes/router';
import connection from '../database/mongo';
import * as env from 'dotenv';
import morgan from 'morgan';

env.config();

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.connectMongo();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors({ origin: '*', credentials: true }));
    this.server.use(morgan('dev'));
  }

  private routes() {
    this.server.use(router);
  }

  private async connectMongo() {
    await connection();
  }
}

export default App;
