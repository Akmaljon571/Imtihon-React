import { createContext, useState } from "react";


export const Auth = createContext()

export const AuthPriveder = ({ children }) => {
    const local = JSON.parse(localStorage.getItem('token'))

    const [auth, setAuth] = useState(local || ''); // Auth prive || public
    const [token, setToken] = useState(local || ''); // Token localga saqlash uchun 


    const data = {
        auth, 
        setAuth,
        token,
        setToken
    }
 
    return <Auth.Provider value={data}>{ children }</Auth.Provider>
}