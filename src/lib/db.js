import { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } from '$env/static/private';

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    database: PGDATABASE || "postgres",
    user: PGUSER || "postgres",
    password: PGPASSWORD || '',
    host: PGHOST || "localhost",
    port: Number(PGPORT || 5432),
});

export const connectToDB = async () => await pool.connect();