import App from './app/app';
import * as env from 'dotenv';

env.config();

const PORT = process.env.PORT || 3030;

new App().server.listen(PORT, () =>
  console.log(`[SERVER] Running on port ${PORT}`),
);
