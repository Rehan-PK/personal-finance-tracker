import { Pool } from 'pg';

const pool = new Pool({
    user: 'rehan',
    host: 'localhost',
    database: 'personal_finance_tracker',
    password: 'Greenify',
    port: 5432,
});

export default pool;