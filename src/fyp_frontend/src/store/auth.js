import { canisterId as backendCanisterId, createActor as backendCreateActor } from "../../../declarations/fyp_backend";
import { AuthClient } from "@dfinity/auth-client"

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// internet identity canister link
let identityProvider = "https://identity.ic0.app/"
if (process.env.NODE_ENV == "development") {
  identityProvider = "http://127.0.0.1:4943/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai"
}


// non-serializable variables outside the global state
/* 
  authentication services provider
*/
let authClient = null
export const getAuthClient = () => {
  return authClient
}

/* 
  backend connector
*/
let actor = null
export const getActor = () => {
  return actor
}


// authentication-related async thunks
/* 
  initialize auth client
*/
export const setAuthClient = createAsyncThunk('auth/setAuthClient', async (dispatch) => {
  authClient = await AuthClient.create()
  return true
})

/* 
  initialize backend connector
*/
export const setActor = createAsyncThunk('auth/setActor', async () => {
  actor = await backendCreateActor(backendCanisterId, {
    agentOptions: {
      identity: authClient.getIdentity(),
    },
  })
  return true
})

/* 
  authentication status checker
*/
export const checkAuthentication = createAsyncThunk('auth/checkAuthentication', async () => {
  return await authClient.isAuthenticated()
})

/* 
  login function
*/
export const login = createAsyncThunk('auth/login', async () => {
  await authClient.login({
    identityProvider,
    onSuccess: () => {
      return true
    },
  });
})

/* 
  logout function
*/
export const logout = createAsyncThunk('auth/logout', async() => {
  await authClient.logout()
  actor = null
  return true
})


// auth global state
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthClientReady: false,
    isActorReady: false,
    isAuthenticated: false,
  },
  reducers: {

  },
  extraReducers(builder) {
    builder.addCase(setAuthClient.fulfilled, (state) => {
      state.isAuthClientReady = true
    }).addCase(setActor.fulfilled, (state) => {
      state.isActorReady = true
    }).addCase(checkAuthentication.fulfilled, (state, action) => {
      state.isAuthenticated = action.payload
    }).addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true
    }).addCase(logout.fulfilled, (state) => {
      state.isAuthenticated = false
      state.isActorReady = false
    })
  }
})

export default authSlice.reducer


// selectors
export const isAuthClientReady = state => state.auth.isAuthClientReady
export const isActorReady = state => state.auth.isActorReady
export const isAuthenticated = state => state.auth.isAuthenticated


