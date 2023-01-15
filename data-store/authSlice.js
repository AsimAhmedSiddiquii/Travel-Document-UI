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

export const signUpUser = (body) => {
    return async(dispatch) => {
        const res = await fetch("http://localhost:5000/api/register",{
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        })
        let response =  await res.json();
        if(!res.ok) {
            console.log('Failed');
        } else {
            console.log(response);
        }
    }
}

export const signInUser = (body) => {
    return async(dispatch) => {
        const res = await fetch("http://localhost:5000/api/login",{
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(body)
        })
        let response = await res.json();
        response.data.loggenIn = true;
        if(!res.ok) {
            console.log('Failed');
        } else {
            dispatch(authSlice.actions.login({userData: response.data}));
        }
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            console.log('Hello');
            state.loggenIn = true;
            localStorage.setItem("userData",(action.payload.userData.email));
            state.id = action.payload.userData._id;
            state.fullName = action.payload.userData.fullName;
            state.email = action.payload.userData.email;
            state.phoneno = action.payload.userData.phoneno;
            state.aadharno = action.payload.userData.aadharno;
        },
        logout(state, action) {
            state.loggenIn = false;
            localStorage.removeItem("userData");
            state.id = '';
            state.address ='';
            state.fullName = '';
            state.email = '';
            state.phoneno = '';
            state.aadharno = '';
        }
    }
});

