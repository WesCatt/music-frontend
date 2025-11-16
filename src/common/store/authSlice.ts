'use client'

import {clearAuth, getProfile, saveAuth} from "@/common/utils/auth.ts";
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
        save(state, action) {
            saveAuth(action.payload.user, action.payload.token)
            state.value = action.payload.user;
        }
    }
});


export const {clear, save} = authSlice.actions;

export default authSlice.reducer;