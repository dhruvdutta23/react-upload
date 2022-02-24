export default (state=[], action)=>{

switch(action.type){
    case "add":
        state= [...state, action.text]
        console.log("state after adding, ", state)
        console.log(action)
        return state
    default:
        return  state
}
}

