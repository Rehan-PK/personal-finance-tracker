import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// below is CommonJS format:
// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };

// below is ES6 syntax that does the same thing as above:
const query = (text, params) => pool.query(text, params);

// Export the query function
export default { query };