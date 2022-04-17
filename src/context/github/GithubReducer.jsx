
export const GET_USERS = "GET_USERS";
export const SET_ERROR = "SET_ERROR";
export const ACTIONS_CALL_API = "ACTIONS_CALL_API";
export const CLEAR_USERS = "CLEAR_USERS";
export const GET_USER = "GET_USER";

const githubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_CALL_API:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };
    
    case GET_USER:
        return{
          ...state,
          user: action.payload.user,
          loading: false,
          error: null
        }
  

    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };


    case CLEAR_USERS:
      return{
        ...state,
        users:[]
      }
    default:
      return state;
  }
};

export default githubReducer;