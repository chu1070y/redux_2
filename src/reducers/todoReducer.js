
let count = 0

const todoReducer = (state = [], action) => {

    console.log("todoReducer...................start")
    console.log(action)

    if (action.type==="remove"){
        state.splice(action.data,1)
        console.log(state)
        return [...state]
    }

    return [...state,'AAA' + count++]
}

export default todoReducer