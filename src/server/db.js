import { Database } from 'arangojs';
import config from 'config';

const { url, username, password, name } = config.database;
const db = new Database({ url });

db.useDatabase(name);
db.useBasicAuth(username, password);

export default db;
