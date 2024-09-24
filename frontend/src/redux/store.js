import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './Books/reduser'
import filterReduser from './slices/filterSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReduser,
  },
})

export default store
