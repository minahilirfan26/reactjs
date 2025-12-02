import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/user'
import counterSlice from './reducer/counter'
let store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterSlice
    }
})
export default store