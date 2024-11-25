

const increment=document.getElementById('increment')

const decrement=document.getElementById('decrement')

const incrementById=document.getElementById('incrementById')
const incrementAsync=document.getElementById('incrementAsync')



let value=document.getElementById('value')
// let greet='hello'

console.log(value.innerHTML)


const initialState={
    count:0
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1}
            break;
        case 'decrement':
            return {...state,count:state.count-1}
            break;   
        default:
            return state; 
    }
}

const store=Redux.createStore(reducer)


store.subscribe(()=>{
    value.innerHTML=store.getState().count
})



const handleIncrement=()=>{
    // const oldValue=Number(value.innerHTML)
    // console.log(typeof oldValue)
    // console.log(oldValue)
    // value.innerHTML=oldValue+1
    // console.log(greet)

    store.dispatch({type:'increment'})
}

const handleDecrement=()=>{
   store.dispatch({type:'decrement'})
}

const handleIncrementIfOdd=()=>{
    if(Number(store.getState().count)%2!==0){
store.dispatch({type:'increment'})
    }
    
}

const handleIncrementAsync=()=>{
    setTimeout(()=>{
        store.dispatch({type:'increment'})
    },3000)
}

