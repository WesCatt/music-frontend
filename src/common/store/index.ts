'use client'
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice.ts'

export default configureStore({
    reducer: {
        auth: authReducer,
    }
});