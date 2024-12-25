import mysql from 'mysql2/promise'
import * as dotenv from 'dotenv'
dotenv.config()

// Ensure environment variables are loaded before creating config
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD) {
  throw new Error('Required database environment variables are not set')
}

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10),
  ssl: {
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

console.log('Database config:', {
  host: config.host,
  user: config.user,
  database: config.database,
  port: config.port
})

const pool = mysql.createPool(config)

// Add connection test
pool.getConnection()
  .then(connection => {
    console.log('Database connected successfully')
    connection.release()
  })
  .catch(err => {
    console.error('Database connection failed:', err)
  })

export async function query(sql, params) {
  try {
    const [results] = await pool.execute(sql, params)
    return results
  } catch (error) {
    console.error('Database query error:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage
    })
    throw error
  }
} 
