import express from 'express';
import cors from 'cors';
import router from '../routes';

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private routes() {
    this.server.use(router)
  }
}

export default App;
