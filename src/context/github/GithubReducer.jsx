
export const GET_USERS ="GET_USERS"
export const SET_ERROR ="SET_ERROR"
export const ACTIONS_CALL_API = "ACTIONS_CALL_API"
const githubReducer = (state, action) => {
    switch(action.type){
        
        case ACTIONS_CALL_API: 
            return {
                ...state,
                loading: true,
                error: null
            };
        
        case GET_USERS:
            console.log(action)
            return{
                ...state, 
                users:action.payload,
                loading: false,
                error: null
            }

        case SET_ERROR:
            return{
              ...state,
              loading: false,
              error: action.error      
            }    
        default:
            return state
    }
 
}

export default githubReducer;