import {createSlice} from "@reduxjs/toolkit";

const initialModalState = { modalVisible: false };

const modalSignInSlice = createSlice({
    name: 'modalVisible',
    initialState: initialModalState,
    reducers: {
        setModalVisible(state) {
            state.modalVisible = true;
        },
        setModalNotVisible(state) {
            state.modalVisible = false;
        }
    }
});

export const modalActions = modalSignInSlice.actions;
export default modalSignInSlice.reducer;