import { useContext } from "react";
import { Auth } from "../content/Auth";


function useAuth() {
   const { auth,setAuth, token, setToken, filter, setFilter,million, setMillion, Id, setId } = useContext(Auth)

    return { 
        auth,
        setAuth,
        token,
        setToken,
        filter,
        setFilter,
        million,
        setMillion,
        Id,
        setId
    };
}

export default useAuth;