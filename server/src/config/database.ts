import { createPool } from 'mysql2/promise';

const pool = createPool({
  // host: '127.0.0.1', // service name defined in docker-compose.yml file
  host:"db",
  user: 'root',
  password: 'rootpassword',
  database: 'net_nut_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;