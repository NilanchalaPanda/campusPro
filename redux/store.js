import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './slices/chatSlice'; // Correct import for default export
export const store = configureStore({
  reducer: {
    chat: chatReducer,
  },
})

export default store
