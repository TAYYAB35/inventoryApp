// store.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      userInfo: null,
      setUser: (data) => set({ userInfo: data }),
      logout: () => set({ userInfo: null }),
    }),
    {
      name: 'user-info', // key in localStorage
      getStorage: () => localStorage,
    }
  )
)

export default useUserStore
