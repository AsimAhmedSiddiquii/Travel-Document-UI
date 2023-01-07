import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from 'data-store/authSlice' 
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
})