import { fileURLToPath } from 'url'
import { dirname } from 'path'
import * as dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: dirname(__dirname) + '/.env' })

import { query } from './db.mjs'

// Add debug logging for all env variables
console.log('Environment variables loaded:', {
  dbHost: process.env.DB_HOST,
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT
})

async function createTables() {
  try {
    // Create categories table
    await query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        slug VARCHAR(50) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `)

    // Create products table
    await query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        intown_price DECIMAL(10,2) NOT NULL,
        shipped_price DECIMAL(10,2) NOT NULL,
        image_url VARCHAR(255),
        category_id INT,
        tags JSON,
        FOREIGN KEY (category_id) REFERENCES categories(id),
        UNIQUE KEY unique_name (name)
      )
    `)

    console.log('Tables created successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error creating tables:', error)
    process.exit(1)
  }
}

createTables()