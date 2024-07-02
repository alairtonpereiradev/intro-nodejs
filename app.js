// app.js
import 'dotenv/config'
import postgres from 'postgres';
//require('dotenv').config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {'sslmode':'require'},
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
  
});
export const sql = postgres(URL, { ssl: { 'sslmode': 'require' }});
// console.log(sql);

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }

// getPgVersion();