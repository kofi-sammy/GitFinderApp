export const SET_ALERT = "SET_ALERT"
export const REMOVE_ALERT = "REMOVE_ALERT"

const AlertReducer = (state,action) => {
    switch(action.type){
        case "SET_ALERT":
            return{
                alert:action.payload
            }
        case "REMOVE_ALERT": 
          return{

          }

        default: 
            return state
    }
  
}

export default AlertReducer;