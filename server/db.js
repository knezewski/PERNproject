import pg from 'pg';

const pool = new pg.Pool({
   user: "postgres",
   password:"363585By",
   host: "localhost",
   port: 5432,
   database: "perntodo",
});

export default pool;

