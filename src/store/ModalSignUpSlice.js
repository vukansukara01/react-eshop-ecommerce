import {createSlice} from "@reduxjs/toolkit";

const initialModalSignUpState = { modalSignUpVisible: false };

const modalSignUpSlice = createSlice({
    name: 'modalSignUpVisible',
    initialState: initialModalSignUpState,
    reducers: {
        setModalSignUpVisible(state) {
            state.modalSignUpVisible = true;
        },
        setModalSignUpNotVisible(state) {
            state.modalSignUpVisible = false;
        }
    }
});

export const modalSignUpActions = modalSignUpSlice.actions;
export default modalSignUpSlice.reducer;