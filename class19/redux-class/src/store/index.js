import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/user'

let store = configureStore({
    reducer: {
        user: userReducer
    }
})
export default store