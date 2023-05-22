import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    userName: null,
}

const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.userName = action.payload.userName;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        setSignOut: (state) => {
            state.userName = null;
            state.isLoggedIn = false;
        }
    }
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = (state : any) => state.userAuth.isLoggedIn;
export const selectUserName = (state : any) => state.userAuth.userName;

export default authSlice.reducer;