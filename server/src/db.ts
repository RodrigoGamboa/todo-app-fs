import { Pool } from "pg";
import "dotenv/config";

interface QueryResult {
  rows: any[];
}

interface QueryFunction {
  (text: string, params?: any[]): Promise<QueryResult>;
}

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

const query: QueryFunction = (text, params) => pool.query(text, params);

export { query };
