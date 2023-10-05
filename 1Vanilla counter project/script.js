// dom
const incrementEl=document.querySelector("#increment")
const decrementEl=document.querySelector("#decrement")
const countervalue=document.querySelector("#counter")

const initialState={
    value:0
}

// create a reducer function
function reducer(state=initialState,action){
    if(action.type === 'increment'){
        return {
            ...state,
            value:state.value+1
        }
    }else if(action.type === 'decrement'){
            return {
                ...state,
                value:state.value -1
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
    store.dispatch({
        type:'increment',
    })
})

decrementEl.addEventListener("click",()=>{
    store.dispatch({
        type:'decrement'
    })
})