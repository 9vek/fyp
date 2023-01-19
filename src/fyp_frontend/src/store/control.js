import { createSlice } from '@reduxjs/toolkit'

const controlSlice = createSlice({
  name: "control",
  initialState: {
    isLoading: false
  },
  reducers: {
    startLoading: state => {
      state.isLoading = true
    },
    stopLoading: state => {
      state.isLoading = false
    }
  },
})

export default controlSlice.reducer

export const { startLoading, stopLoading } = controlSlice.actions

export const isLoading = state => state.control.isLoading