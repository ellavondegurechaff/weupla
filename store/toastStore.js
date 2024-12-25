import { create } from 'zustand'

const useToastStore = create((set) => ({
  message: '',
  isVisible: false,
  showToast: (message) => {
    // Hide any existing toast first
    set({ isVisible: false })
    
    // Small delay before showing new toast
    setTimeout(() => {
      set({ message, isVisible: true })
      
      // Auto hide after 2.5 seconds
      setTimeout(() => {
        set((state) => ({ ...state, isVisible: false }))
      }, 2500)
    }, 100)
  }
}))

export default useToastStore