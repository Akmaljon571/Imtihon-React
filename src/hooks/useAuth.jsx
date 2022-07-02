import { useContext } from "react";
import { Auth } from "../content/Auth";


function useAuth() {
   const { auth,setAuth, token, setToken } = useContext(Auth)

    return { 
        auth,
        setAuth,
        token,
        setToken 
    };
}

export default useAuth;