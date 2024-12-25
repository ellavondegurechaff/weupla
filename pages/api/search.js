import { query } from '@/utils/db.mjs'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { q, categories } = req.query
    let sql = `
      SELECT p.*, c.name as category_name, c.slug as category_slug 
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
    `
    const params = []
    const conditions = []

    if (q) {
      conditions.push(`(
        p.name LIKE ? OR 
        p.description LIKE ? OR 
        JSON_CONTAINS(p.tags, ?, '$')
      )`)
      params.push(`%${q}%`, `%${q}%`, `"${q}"`)
    }

    if (categories && !categories.includes('all')) {
      const categoryArray = categories.split(',')
      conditions.push(`c.slug IN (${categoryArray.map(() => '?').join(',')})`)
      params.push(...categoryArray)
    }

    if (conditions.length > 0) {
      sql += ' WHERE ' + conditions.join(' AND ')
    }

    sql += ' ORDER BY p.id DESC'
    const products = await query(sql, params)
    res.status(200).json(products)
  } catch (error) {
    console.error('Search error:', error)
    res.status(500).json({ message: 'Error searching products' })
  }
}
