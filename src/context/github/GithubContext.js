import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()

//const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
//const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
     // const clearUsers = () => dispatch({ type: 'CLEAR_USERS'})

   // const setLoading = () => dispatch({type: 'SET_LOADING'})

    return (
        <GithubContext.Provider 
        value={{
            ...state,
            dispatch,
        }}
        >
            {children}
        </GithubContext.Provider>
    )

}
/*,{
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`
    },
}
*/
export default GithubContext