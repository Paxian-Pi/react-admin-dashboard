import { createSlice } from '@reduxjs/toolkit'
import isEmpty from '../validation/is-empty'

const initialState = {
    isLoginPage: false,
    isAuthenticated: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: { value: initialState },
    reducers: {
        currentUser: (state, action) => {
            state.value.isAuthenticated = !isEmpty(action.payload)
            state.value.user = action.payload
        },
        currentUserActionIsLogin: (state, action) => {
            state.value.isLoginPage = action.payload
        }
    }
})

export const { currentUser, currentUserActionIsLogin } = authSlice.actions
export default authSlice.reducer