import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './Books/reduser'

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
})

export default store
