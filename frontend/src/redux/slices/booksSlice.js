import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import createBookWithId from '../../utils/createBookWithID'
import { addError } from './errorSlice'

const initialState = {
  books: [],
  isLoadingViaAPI: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(addError(error.message))
      throw error
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => action.payload !== book.id),
      }
    },
    toggleFavorite: (state, action) => {
      return state.books.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      )
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBook.fulfilled, (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       state.push(createBookWithId(action.payload, 'API'))
  //     }
  //   })
  // },
  extraReducers: {
    [fetchBook.pending]: (state) => {
      state.isLoadingViaAPI = true
    },
    [fetchBook.fulfilled]: (state, action) => {
      state.isLoadingViaAPI = false
      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, 'API'))
      }
    },
    [fetchBook.rejected]: (state) => {
      state.isLoadingViaAPI = false
    },
  },
})

export default booksSlice.reducer

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions

export const selectBooks = (state) => state.books.books
