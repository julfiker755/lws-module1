// dom
const incrementEl=document.querySelector("#increment")
const decrementEl=document.querySelector("#decrement")
const countervalue=document.querySelector("#counter")

const initialState={
    value:0
}
// action creator
const INCREMENT="increment"
const DECREMENT="decrement"

// action create
const incrementvalue=(value)=>{
    return({
        type:INCREMENT,
        payload:value,
    })
}

const decrementvalue=(value)=>{
    return({
        type:DECREMENT,
        payload:value,
    })
}
// create a reducer function
function reducer(state=initialState,action){
    if(action.type === INCREMENT){
        return {
            ...state,
            value:state.value + action.payload
        }
    }else if(action.type === DECREMENT){
            return {
                ...state,
                value:state.value - action.payload
            }
    }else{
        return state
    }

}

// create a store
const store=Redux.createStore(reducer)

function render(){
    const totalvalue=store.getState()
    countervalue.innerHTML=totalvalue.value.toString();
}
render()

// create a storesubscribe
store.subscribe(render)



// create a addEventLilster for my applilcation
incrementEl.addEventListener("click",()=>{
    store.dispatch(incrementvalue(10))
})

decrementEl.addEventListener("click",()=>{
    store.dispatch(decrementvalue(10))
})