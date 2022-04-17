import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();


export const GithubProvider = ({ children }) => {
  const InitialState = {
    users: [],
    user:{},
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(githubReducer, InitialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
