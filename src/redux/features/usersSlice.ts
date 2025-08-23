import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuthenticated = true;
        },
        isLogout: (state) => {
            state.isAuthenticated = false;
        }
    }
});

export const {setAuth,isLogout} = usersSlice.actions;

export default usersSlice.reducer;