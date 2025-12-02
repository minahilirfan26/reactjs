let Initial_State = {
count: 0,
}

let userReducer = (state = Initial_State, action)=>{
    // console.log("Action", action)
if(action.type === "increment"){
    return {
        ...state,
        count: state.count + 1
    }
}
    return state
}
export default userReducer