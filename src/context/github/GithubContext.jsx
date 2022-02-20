import { createContext, useReducer } from "react";
import api from "../../axios";
import githubReducer from "./GithubReducer";
import { GET_USERS, ACTIONS_CALL_API, SET_ERROR} from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const InitialState = {
    users: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(githubReducer, InitialState);
  // const [users, setUsers] = useState([]);
  // const [isloading, setIsLoading] = useState(false);
  // const [error, setError] = useState("error");

// Get initial Users(for  testing)
  const getUser = async () => {
    try {
      dispatch({
        type: ACTIONS_CALL_API,
      });

      const res = await api.get(`/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
    
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
      // setUsers(res.data);
      // setIsLoading(false);
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        error: "Error loading Data",
      });
      // setIsLoading(false);
      // setError(err.messsage);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        error: state.error,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
