import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name : "",
    email : "",
    auth : false
  }

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login : (state,action) => {
        state.action.name = action.payload.name
        state.action.email = action.payload.email
        state.action.auth = action.payload.auth
    }
  }
});

export const {login} = userSlice.actions

export default userSlice.reducer