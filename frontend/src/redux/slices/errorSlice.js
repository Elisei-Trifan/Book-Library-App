import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError: (state, action) => {
      return action.payload
    },
    clearError: (state, action) => {
      return initialState
    },
  },
})

export const { addError, clearError } = errorSlice.actions

export const selectErrorMessage = (state) => state.error

export default errorSlice.reducer
