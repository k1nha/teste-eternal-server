import { connect } from 'mongoose';
import * as env from 'dotenv';

env.config();
const url = process.env.CONNECTION_MONGODB || '';

async function connection() {
  try {
    const mongo = await connect(url).catch(err => console.error(err));

    return mongo;
  } catch (err) {
    console.error(`Error ${err}`);
  }
}

export default connection;
