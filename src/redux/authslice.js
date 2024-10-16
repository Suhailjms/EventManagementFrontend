import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: '',
    role: '',
    isAuthenticated: false
}

const AuthReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated:(state, action)=>{
            state.isAuthenticated = action.payload
        },
        setToken:(state, action)=>{
            state.token = action.payload
        },
        setRole:(state, action)=>{
            state.role = action.payload
        },
    }
})

export const {setAuthenticated, setRole, setToken} = AuthReducer.actions;
export default AuthReducer.reducer;