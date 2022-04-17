import { createContext,useReducer } from "react";
import AlertReducer, { SET_ALERT , REMOVE_ALERT} from "./AlertReducer";


const AlertContext = createContext();

export const AlertProvider = ({children}) => {
     const InitialState = null

     const [state, dispatch ] = useReducer(AlertReducer, InitialState)

      const setAlert = (message, type) => {
          dispatch(
            {
              type: SET_ALERT, 
              payload: {message:'Please enter something',type}
            })

        setTimeout(() => dispatch({type: REMOVE_ALERT }),3000)    
      }

    return(
        <AlertContext.Provider value={{alert:state, setAlert}}>
            {children}
        </AlertContext.Provider>
    )

}

export default AlertContext;