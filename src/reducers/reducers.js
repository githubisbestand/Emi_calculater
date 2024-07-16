import { useReducer } from "react";

export function Reducers(state,action){
    switch (action.type){
        case  "Increment" : return {count : state.count + 1}
        case "Decreent" : return { count : state.count - 1} 
        default : throw new Error();
    }
}


export function counter(){
    const [state, dispatch] = useReducer(Reducers, {count : 0});
    console.log(state);
    
    return (
        <div>
            <p>Count : {state.count}</p>
            <button onClick={() => dispatch({type : "Increment"})}>+</button>
            <button onClick={() => dispatch({dispatch : "Decrement"})}>-</button>
        </div>
    )
}
