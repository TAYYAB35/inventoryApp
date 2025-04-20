// store.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUserStore = create(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (data) => set({ userInfo: data }),
      clearUserInfo: () => set({ userInfo: null }),
    }),
    {
      name: 'user-info', // key in localStorage
    }
  )
)

export default useUserStore
