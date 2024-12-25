import { query } from './db.mjs'

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