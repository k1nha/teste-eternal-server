import { connect } from 'mongoose';

async function connection() {
  const mongo = await connect('mongodb://127.0.0.1:27017/test').catch(err =>
    console.error(err),
  );

  return mongo;
}

export default connection;
