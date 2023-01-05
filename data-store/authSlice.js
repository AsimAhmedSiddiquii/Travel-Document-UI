import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggenIn: false,
    id: '',
    address: '',
    fullName: '',
    email: '',
    phoneno: '',
    aadharno: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.loggenIn = true;
            state.id = action.payload.userData._id;
            state.fullName = action.payload.userData.fullName;
            state.email = action.payload.userData.email;
            state.phoneno = action.payload.userData.phoneno;
            state.aadharno = action.payload.userData.aadharno;
        },
        logout(state, action) {
            state.loggenIn = false;
            state.id = '';
            state.address ='';
            state.fullName = '';
            state.email = '';
            state.phoneno = '';
            state.aadharno = '';
        }
    }
});

