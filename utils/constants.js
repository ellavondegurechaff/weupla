import { Home, ShoppingCart, Info, MessageCircle, HelpCircle } from 'lucide-react'

export const navigationLinks = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'products', label: 'Products', icon: ShoppingCart },
  { id: 'about', label: 'About Us', icon: Info },
  { id: 'contact', label: 'Contact Us', icon: MessageCircle },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
]

export const products = [
  {
    id: 1,
    name: "Purple Haze",
    price: 299.99,
    description: "Classic sativa dominant hybrid with sweet berry notes",
    rating: 4.8,
    image: "/products/1.png"
  },
  {
    id: 2,
    name: "OG Kush",
    price: 349.99,
    description: "Legendary strain with earthy pine and woody undertones",
    rating: 4.9,
    image: "/products/2.jpg"
  },
  {
    id: 3,
    name: "Blue Dream",
    price: 289.99,
    description: "Sweet berry aroma with full-body relaxation",
    rating: 4.7,
    image: "/products/3.png"
  },
  {
    id: 4,
    name: "Girl Scout Cookies",
    price: 319.99,
    description: "Sweet and earthy with hints of mint",
    rating: 4.8,
    image: "/products/4.jpg"
  },
  {
    id: 5,
    name: "Northern Lights",
    price: 279.99,
    description: "Pure indica with sweet and spicy aromas",
    rating: 4.6,
    image: "/products/5.png"
  },
  {
    id: 6,
    name: "Sour Diesel",
    price: 309.99,
    description: "Energetic and dreamy cerebral effects",
    rating: 4.7,
    image: "/products/6.jpg"
  },
  { 
    id: 7,
    name: "White Widow",
    price: 289.99,
    description: "Powerful burst of euphoria and energy",
    rating: 4.5,
    image: "/products/7.jpg"
  },
  {
    id: 8,
    name: "AK-47",
    price: 299.99,
    description: "Long-lasting cerebral buzz with sweet floral notes",
    rating: 4.6,
    image: "/products/8.jpg"
  },
  {
    id: 9,
    name: "Granddaddy Purple",
    price: 329.99,
    description: "Sweet grape and berry flavors",
    rating: 4.8,
    image: "/products/9.png"
  },
  {
    id: 10,
    name: "Jack Herer",
    price: 319.99,
    description: "Clear-headed, creative sativa effects",
    rating: 4.7,
    image: "/products/10.jpg"
  },
  {
    id: 11,
    name: "Gorilla Glue",
    price: 309.99,
    description: "Powerful indica with sweet berry aroma",
    rating: 4.6,
    image: "/products/11.png"
  },
  {
    id: 12,
    name: "Purple Kush",
    price: 309.99,
    description: "Powerful indica with sweet berry aroma",
    rating: 4.6,
    image: "/products/12.jpg"
  },
  {
    id: 13,
    name: "Blueberry",
    price: 309.99,
    description: "Powerful indica with sweet berry aroma",
    rating: 4.6,
    image: "/products/13.png"
  },
  {
    id: 14,
    name: "Green Crack",
    price: 309.99,
    description: "Sharp and energetic, perfect for morning use",
    rating: 4.6,
    image: "/products/14.png"
  },
  {
    id: 15,
    name: "Wedding Cake",
    price: 309.99,
    description: "Rich and tangy with earthy pepper notes",
    rating: 4.6,
    image: "/products/15.png"
  },
  {
    id: 16,
    name: "Gelato",
    price: 309.99,
    description: "Sweet and creamy with berry undertones",
    rating: 4.6,
    image: "/products/17.jpeg"
  },
  {
    id: 17,
    name: "Bruce Banner",
    price: 319.99,
    description: "Sweet and earthy, with a powerful punch",
    rating: 4.7,
    image: "/products/18.png"
  },
  {
    id: 18,
    name: "Skywalker OG",
    price: 329.99,
    description: "Heavily sedating with a piney aroma",
    rating: 4.8,
    image: "/products/19.jpg"
  },
  {
    id: 19,
    name: "Pineapple Express",
    price: 299.99,
    description: "Tropical and fruity with long-lasting effects",
    rating: 4.5,
    image: "/products/20.png"
  },
  {
    id: 20,
    name: "Bubba Kush",
    price: 289.99,
    description: "Coffee and chocolate notes with relaxing effects",
    rating: 4.6,
    image: "/products/21.jpg"
  },
  {
    id: 21,
    name: "Trainwreck",
    price: 309.99,
    description: "Spicy pine and citrus notes with euphoric effects",
    rating: 4.7,
    image: "/products/22.png"
  },
  {
    id: 22,
    name: "Durban Poison",
    price: 309.99,
    description: "Pure sativa with sweet anise flavor",
    rating: 4.6,
    image: "/products/23.png"
  }
].filter((product, index, self) => 
  index === self.findIndex((p) => p.id === product.id)
)

export const PRODUCTS_PER_LOAD = 12

export const paymentMethods = [
  { method: 'Cashapp', fee: '5%', icon: '💳' },
  { method: 'Zelle', fee: '5%', icon: '💸' },
  { method: 'Crypto', fee: '4%', icon: '₿' },
  { method: 'Cash', fee: '0%', icon: '💵' },
]

export const businessHours = {
  days: 'Mon - Sun',
  hours: '1pm - 6pm'
}

export const categories = [
  { id: 'all', name: 'All Products', slug: 'all' },
  { id: 'exotics', name: 'Exotics', slug: 'exotics' },
  { id: 'highs', name: 'Highs', slug: 'highs' },
  { id: 'mids', name: 'Mids', slug: 'mids' },
  { id: 'lows', name: 'Lows', slug: 'lows' },
  { id: 'carts-edibles', name: 'Carts/Edibles/Dispos', slug: 'carts-edibles' }
]

export const services = [
  { name: 'TP🌡️ Service', icon: '✅', description: 'Premium temperature-controlled delivery' },
  { name: 'Bread Routing', icon: '✅', description: 'Efficient delivery routes' },
  { name: 'Bulk Players', icon: '💪', description: 'Special rates for bulk orders' }
]

export const contactInfo = {
  signal: '+1234567890',
  telegram: '@weupla',
  responseTime: '5 minutes',
  languages: ['English', 'Spanish']
}

export const faqItems = [
  { 
    question: 'What are your shipping times?',
    answer: 'We typically process and ship orders within 24-48 hours.'
  },
  {
    question: 'Do you offer returns?',
    answer: 'Yes, we have a 30-day return policy for unopened products.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including Cashapp, Zelle, and Crypto.'
  }
] 