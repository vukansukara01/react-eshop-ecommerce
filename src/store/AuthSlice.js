import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = { auth: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers : {
        setAuthLoggedIn(state) {
            state.auth = true;
        },
        setAuthLoggedOut(state) {
            state.auth = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;