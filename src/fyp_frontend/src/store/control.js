import { createSlice } from '@reduxjs/toolkit'
import { 
  createAuthClient,
  createActor,
  checkAuthentication,
  login,
  logout,
  getAccountInfo
} from './auth'

const controlSlice = createSlice({
  name: "control",
  initialState: {
    isLoading: false
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createAuthClient.pending, (state) => {
      state.isLoading = true
    }).addCase(createActor.pending, (state) => {
      state.isLoading = true
    }).addCase(checkAuthentication.pending, (state) => {
      state.isLoading = true
    }).addCase(login.pending, (state) => {
      state.isLoading = true
    }).addCase(logout.pending, (state) => {
      state.isLoading = true
    }).addCase(getAccountInfo.pending, (state) => {
      state.isLoading = true
    }).addCase(createAuthClient.fulfilled, (state) => {
      state.isLoading = false
    }).addCase(createActor.fulfilled, (state) => {
      state.isLoading = false
    }).addCase(checkAuthentication.fulfilled, (state) => {
      state.isLoading = false
    }).addCase(login.fulfilled, (state) => {
      state.isLoading = false
    }).addCase(logout.fulfilled, (state) => {
      state.isLoading = false
    }).addCase(getAccountInfo.fulfilled, (state) => {
      state.isLoading = false
    })
  }
})

export default controlSlice.reducer

export const isLoading = state => state.control.isLoading