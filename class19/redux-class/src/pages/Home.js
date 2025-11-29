import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'


function Home(){
    // let [count, setCount] = useState(0)
    let state = useSelector(state => state.user)
    // console.log(counter)
    let dispatch = useDispatch()
    // let isCount = ()=>{
    //     dispatch({
    //         type: "increment"
    //     })
    // }
    return(
<div>
    <button onClick={()=> dispatch({type: "increment"})}>{state.count}</button>
</div>
    )
}
export default Home