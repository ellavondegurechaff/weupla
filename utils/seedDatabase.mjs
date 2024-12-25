import { query } from './db.mjs'

const products = [
  {
    name: 'Blue Dream',
    description: 'Sweet berry aroma with balanced full body relaxation',
    intown_price: 160.00,
    shipped_price: 180.00,
    category: 'exotics',
    image: '/products/product1.jpg',
    tags: ['hybrid', 'berry', 'relaxing']
  },
  {
    name: 'Purple Punch',
    description: 'Grape candy and blueberry muffins with heavy indica effects',
    intown_price: 200.00,
    shipped_price: 220.00,
    category: 'exotics',
    image: '/products/product2.jpg',
    tags: ['indica', 'grape', 'dessert']
  },
  {
    name: 'Gelato 41',
    description: 'Sweet and earthy with hints of lavender and pine',
    intown_price: 220.00,
    shipped_price: 240.00,
    category: 'exotics',
    image: '/products/product3.jpg',
    tags: ['hybrid', 'dessert', 'pine']
  },
  {
    name: 'Sour Diesel',  
    description: 'Energetic and dreamy cerebral effects with diesel aroma',
    intown_price: 190.00,
    shipped_price: 210.00,
    category: 'highs',
    image: '/products/product4.jpg',
    tags: ['sativa', 'diesel', 'energetic']
  },
  {
    name: 'Wedding Cake',
    description: 'Rich and tangy with earthy pepper undertones',
    intown_price: 210.00,
    shipped_price: 230.00,
    category: 'exotics',
    image: '/products/product5.jpg',
    tags: ['hybrid', 'vanilla', 'pepper']
  },
  {
    name: 'MAC 1',
    description: 'Creamy citrus terpenes with smooth diesel undertones',
    intown_price: 210.00,
    shipped_price: 230.00,
    category: 'exotics',
    image: '/products/product6.jpg',
    tags: ['hybrid', 'citrus', 'diesel']
  },
  {
    name: 'Runtz',
    description: 'Sweet and fruity candy-like flavor profile',
    intown_price: 200.00,
    shipped_price: 220.00,
    category: 'exotics',
    image: '/products/product7.jpg',
    tags: ['hybrid', 'fruity', 'sweet']
  },
  {
    name: 'Gary Payton',
    description: 'Gassy and nutty with a cookie dough finish',
    intown_price: 240.00,
    shipped_price: 260.00,
    category: 'exotics',
    image: '/products/product8.jpg',
    tags: ['hybrid', 'cookies', 'gas']
  },
  {
    name: 'Zkittlez',
    description: 'Tropical fruit blend with berry undertones',
    intown_price: 190.00,
    shipped_price: 210.00,
    category: 'highs',
    image: '/products/product9.jpg',
    tags: ['indica', 'fruit', 'berry']
  },
  {
    name: 'RS11',
    description: 'Complex creamy gas with subtle sweetness',
    intown_price: 200.00,
    shipped_price: 220.00,
    category: 'exotics',
    image: '/products/product10.jpg',
    tags: ['hybrid', 'gas', 'cream']
  },
  // Adding more variety with different categories
  {
    name: 'OG Kush',
    description: 'Classic pine and lemon with woody undertones',
    intown_price: 140.00,
    shipped_price: 160.00,
    category: 'highs',
    image: '/products/product11.jpg',
    tags: ['hybrid', 'pine', 'lemon']
  },
  {
    name: 'Northern Lights',
    description: 'Sweet and spicy with pure indica relaxation',
    intown_price: 130.00,
    shipped_price: 150.00,
    category: 'mids',
    image: '/products/product12.jpg',
    tags: ['indica', 'spicy', 'sweet']
  },
  // Continue with more products...
  // Adding cart/edible category items
  {
    name: 'Premium Vape Cart',
    description: 'Full spectrum distillate with natural terpenes',
    intown_price: 35.00,
    shipped_price: 45.00,
    category: 'carts-edibles',
    image: '/products/cart1.jpg',
    tags: ['vape', 'cart', 'distillate']
  },
  {
    name: 'Gummy Bears 500mg',
    description: 'Fruit-flavored edibles, 50mg per piece',
    intown_price: 15.00,
    shipped_price: 25.00,
    category: 'carts-edibles',
    image: '/products/edible1.jpg',
    tags: ['edible', 'gummy', 'fruit']
  },
  {
    name: 'Gorilla Glue #4',
    description: 'Powerful hybrid with heavy euphoric effects',
    intown_price: 165.00,
    shipped_price: 185.00,
    category: 'exotics',
    image: '/products/product13.jpg',
    tags: ['hybrid', 'earthy', 'pine']
  },
  {
    name: 'Ice Cream Cake',
    description: 'Sweet and creamy with vanilla undertones',
    intown_price: 205.00,
    shipped_price: 225.00,
    category: 'exotics',
    image: '/products/product14.jpg',
    tags: ['indica', 'sweet', 'vanilla']
  },
  {
    name: 'Apple Fritter',
    description: 'Sweet and earthy with actual apple undertones',
    intown_price: 180.00,
    shipped_price: 200.00,
    category: 'highs',
    image: '/products/product15.jpg',
    tags: ['hybrid', 'sweet', 'fruity']
  },
  {
    name: 'Cereal Milk',
    description: 'Sweet and creamy with a subtle berry finish',
    intown_price: 220.00,
    shipped_price: 240.00,
    category: 'exotics',
    image: '/products/product16.jpg',
    tags: ['hybrid', 'sweet', 'creamy']
  },
  {
    name: 'White Runtz',
    description: 'Sweet candy flavor with smooth smoke',
    intown_price: 190.00,
    shipped_price: 210.00,
    category: 'exotics',
    image: '/products/product17.jpg',
    tags: ['hybrid', 'sweet', 'fruity']
  },
  {
    name: 'Green Crack',
    description: 'Sharp and energetic sativa effects',
    intown_price: 120.00,
    shipped_price: 140.00,
    category: 'mids',
    image: '/products/product18.jpg',
    tags: ['sativa', 'energetic', 'citrus']
  },
  {
    name: 'Blue Cookies',
    description: 'Sweet berry and vanilla notes',
    intown_price: 125.00,
    shipped_price: 145.00,
    category: 'mids',
    image: '/products/product19.jpg',
    tags: ['hybrid', 'sweet', 'berry']
  },
  {
    name: 'Live Resin Cart 1g',
    description: 'Full spectrum live resin cartridge',
    intown_price: 45.00,
    shipped_price: 65.00,
    category: 'carts-edibles',
    image: '/products/cart2.jpg',
    tags: ['vape', 'live-resin', 'premium']
  },
  {
    name: 'Chocolate Bar 100mg',
    description: 'Dark chocolate with sea salt',
    intown_price: 15.00,
    shipped_price: 20.00,
    category: 'carts-edibles',
    image: '/products/edible2.jpg',
    tags: ['edible', 'chocolate', 'premium']
  },
  {
    name: 'THC Tincture 1000mg',
    description: 'Full spectrum THC tincture with MCT oil',
    intown_price: 65.00,
    shipped_price: 75.00,
    category: 'carts-edibles',
    image: '/products/tincture1.jpg',
    tags: ['tincture', 'full-spectrum', 'medicinal']
  },
  {
    name: 'Pink Rozay',
    description: 'Sweet floral notes with heavy relaxing effects',
    intown_price: 210.00,
    shipped_price: 230.00,
    category: 'exotics',
    image: '/products/product20.jpg',
    tags: ['indica', 'floral', 'sweet']
  },
  {
    name: 'Biscotti',
    description: 'Cookie dough and vanilla with gas undertones',
    intown_price: 215.00,
    shipped_price: 235.00,
    category: 'exotics',
    image: '/products/product21.jpg',
    tags: ['hybrid', 'cookies', 'vanilla']
  },
  {
    name: 'Strawberry Cough',
    description: 'Sweet strawberry with uplifting effects',
    intown_price: 145.00,
    shipped_price: 165.00,
    category: 'highs',
    image: '/products/product22.jpg',
    tags: ['sativa', 'strawberry', 'sweet']
  },
  {
    name: 'White Widow',
    description: 'Classic strain with balanced effects',
    intown_price: 120.00,
    shipped_price: 140.00,
    category: 'mids',
    image: '/products/product23.jpg',
    tags: ['hybrid', 'earthy', 'balanced']
  },
  {
    name: 'Rainbow Belts',
    description: 'Fruity and sweet with relaxing effects',
    intown_price: 225.00,
    shipped_price: 245.00,
    category: 'exotics',
    image: '/products/product24.jpg',
    tags: ['hybrid', 'fruity', 'sweet']
  },
  {
    name: 'THC Infused Chocolate',
    description: 'Dark chocolate bar 1000mg',
    intown_price: 30.00,
    shipped_price: 40.00,
    category: 'carts-edibles',
    image: '/products/edible3.jpg',
    tags: ['edible', 'chocolate', 'premium']
  },
  {
    name: 'Live Resin Disposable',
    description: 'Premium strain specific live resin',
    intown_price: 45.00,
    shipped_price: 55.00,
    category: 'carts-edibles',
    image: '/products/cart3.jpg',
    tags: ['vape', 'live-resin', 'disposable']
  },
  {
    name: 'Durban Poison',
    description: 'Pure sativa with energetic effects',
    intown_price: 150.00,
    shipped_price: 170.00,
    category: 'highs',
    image: '/products/product25.jpg',
    tags: ['sativa', 'energetic', 'sweet']
  },
  {
    name: 'London Pound Cake',
    description: 'Sweet cake batter with citrus notes',
    intown_price: 210.00,
    shipped_price: 230.00,
    category: 'exotics',
    image: '/products/product26.jpg',
    tags: ['hybrid', 'cake', 'citrus']
  },
  {
    name: 'THC Gummies 1000mg',
    description: 'Extra strength fruit punch gummies',
    intown_price: 25.00,
    shipped_price: 35.00,
    category: 'carts-edibles',
    image: '/products/edible4.jpg',
    tags: ['edible', 'gummy', 'strong']
  },
  {
    name: 'Acapulco Gold',
    description: 'Classic sativa with golden appearance',
    intown_price: 135.00,
    shipped_price: 155.00,
    category: 'mids',
    image: '/products/product27.jpg',
    tags: ['sativa', 'classic', 'energetic']
  },
  {
    name: 'THC Tincture 2000mg',
    description: 'Extra strength full spectrum tincture',
    intown_price: 80.00,
    shipped_price: 90.00,
    category: 'carts-edibles',
    image: '/products/tincture2.jpg',
    tags: ['tincture', 'full-spectrum', 'strong']
  },
  {
    name: 'Lemon Cherry Gelato',
    description: 'Sweet citrus with cherry undertones',
    intown_price: 220.00,
    shipped_price: 240.00,
    category: 'exotics',
    image: '/products/product28.jpg',
    tags: ['hybrid', 'citrus', 'cherry']
  },
  {
    name: 'Pineapple Express',
    description: 'Tropical and sweet with energetic effects',
    intown_price: 155.00,
    shipped_price: 175.00,
    category: 'highs',
    image: '/products/product29.jpg',
    tags: ['hybrid', 'tropical', 'energetic']
  },
  {
    name: 'THC Infused Coffee',
    description: 'Premium coffee beans with 100mg THC per serving',
    intown_price: 20.00,
    shipped_price: 30.00,
    category: 'carts-edibles',
    image: '/products/edible5.jpg',
    tags: ['edible', 'coffee', 'morning']
  }
]

async function seedDatabase() {
  try {
    // First, create categories if they don't exist
    const categories = ['exotics', 'highs', 'mids', 'lows', 'carts-edibles']
    
    for (const category of categories) {
      await query(
        `INSERT INTO categories (name, slug) 
         VALUES (?, ?) 
         ON DUPLICATE KEY UPDATE name = VALUES(name)`,
        [category.charAt(0).toUpperCase() + category.slice(1), category]
      )
    }

    // Then insert products
    for (const product of products) {
      const categoryResult = await query(
        'SELECT id FROM categories WHERE slug = ?',
        [product.category]
      )
      
      const categoryId = categoryResult[0]?.id

      await query(
        `INSERT INTO products 
         (name, description, intown_price, shipped_price, image_url, category_id, tags)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE 
         description = VALUES(description),
         intown_price = VALUES(intown_price),
         shipped_price = VALUES(shipped_price),
         image_url = VALUES(image_url),
         category_id = VALUES(category_id),
         tags = VALUES(tags)`,
        [
          product.name,
          product.description,
          product.intown_price,
          product.shipped_price,
          product.image,
          categoryId,
          JSON.stringify(product.tags)
        ]
      )
    }

    console.log('Database seeded successfully!')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
  process.exit()
}

seedDatabase()
