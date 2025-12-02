import { use, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import counterSlice from '../store/reducer/counter'
import { increment, decrement } from "../store/reducer/counter"

function Home(){
    // let [count, setCount] = useState(0)
    let {count} = useSelector(state => state.counter)
    let dispatch =useDispatch()
    console.log(count)
   
    let isCount = ()=>{
        dispatch(increment())
    }
    return(
<div className="counter">
    <button onClick={()=>dispatch(increment())}>+</button>

    <h3>{count}</h3>
    <button onClick={()=>dispatch(decrement())} disabled={count<1?true:false} style={{backgroundColor:count<1?"gray":"rgb(255, 54, 54)"}}>-</button>
</div>
    )
}
export default Home