function reducer(state={
    personalInfo:[],
    projectInfo:[]
}, action){
    
    switch(action.type){
        case "STORE_PERSONAINFO":
            state={...state, personalInfo:[...state.personalInfo, action.payload]}
            return state

        case "STORE_PROJECTINFO":
            state={...state, projectInfo:[...state.projectInfo, action.payload]}
            return state

        default:
            return state
    }
    
}
export default reducer