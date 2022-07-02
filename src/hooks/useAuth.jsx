import { useContext } from "react";
import { Auth } from "../content/Auth";


function useAuth() {
   const { auth,setAuth, token, setToken, filter, setFilter,million, setMillion, Id, setId, inner, setInner } = useContext(Auth)

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
        setId,
        inner,
        setInner
    };
}

export default useAuth;