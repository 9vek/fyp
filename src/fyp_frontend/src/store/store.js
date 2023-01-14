import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import controlReducer from './control'

export default configureStore({
  reducer: {
    auth: authReducer,
    control: controlReducer
  }
})