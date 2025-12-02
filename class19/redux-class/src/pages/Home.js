import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from '../store/reducer/counter'
import { increment, decrement } from "../store/reducer/counter"

function Home(){
    // let [count, setCount] = useState(0)
    let state = useSelector(state => state.count)
    // console.log(counter)
    let dispatch = useDispatch()
    // let isCount = ()=>{
    //     dispatch({
    //         type: "increment"
    //     })
    // }
    let isCount = ()=>{
        dispatch(increment())
    }
    console.log(state)
    return(
<div>
    <button onClick={isCount}>{state.count}</button>
</div>
    )
}
export default Home