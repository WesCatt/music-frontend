'use client'

import {clearAuth, getProfile} from "@/common/utils/auth.ts";
import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: getProfile(),
    },
    reducers: {
        clear: () => {
            clearAuth();
        },
        // save(state, action) {
        // saveAuth(action.payload.user,action.payload)
        // }
    }
});


export const {clear} = authSlice.actions;

export default authSlice.reducer;