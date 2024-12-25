import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  cart: [],
  
  addToCart: (product) => {
    const { cart } = get()
    const existingItem = cart.find(item => item.id === product.id)

    if (existingItem) {
      // Update quantity of existing item
      set({
        cart: cart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      })
    } else {
      // Add new item with quantity 1
      set({ cart: [...cart, { ...product, quantity: 1 }] })
    }
  },

  removeFromCart: (productId) => {
    const { cart } = get()
    set({ cart: cart.filter(item => item.id !== productId) })
  },

  updateQuantity: (productId, quantity) => {
    const { cart } = get()
    if (quantity < 1) {
      set({ cart: cart.filter(item => item.id !== productId) })
    } else {
      set({
        cart: cart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      })
    }
  },

  clearCart: () => set({ cart: [] }),

  getTotalPrice: () => {
    const { cart } = get()
    return cart.reduce((total, item) => ({
      intown: total.intown + (item.intown_price * item.quantity),
      shipped: total.shipped + (item.shipped_price * item.quantity)
    }), { intown: 0, shipped: 0 })
  }
}))

export default useCartStore 