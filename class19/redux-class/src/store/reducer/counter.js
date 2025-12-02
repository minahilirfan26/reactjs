import { createSlice } from '@reduxjs/toolkit'

let Initial_State = {
count: 0,
}

let counterSlice = createSlice({
    name: "counter",
    initialState: Initial_State,
    reducers:{
        increment(state){
            state.count++
        },
        decrement(state){
            state.count--
        }
    }
})
export let {increment, decrement} = counterSlice.actions
export default counterSlice.reducer