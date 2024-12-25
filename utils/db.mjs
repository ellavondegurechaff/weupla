import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'mysqluser',
  password: 'mysqlpassword',
  database: 'weupla',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

export async function query(sql, params) {
  const [rows] = await pool.execute(sql, params)
  return rows
} 
