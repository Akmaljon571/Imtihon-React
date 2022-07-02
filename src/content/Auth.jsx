import { createContext, useState } from "react";


export const Auth = createContext()

export const AuthPriveder = ({ children }) => {
    const local = JSON.parse(localStorage.getItem('token'))

    const [auth, setAuth] = useState(local || ''); // Auth prive || public
    const [token, setToken] = useState(local || ''); // Token localga saqlash uchun 
    const [million, setMillion ] = useState([]); // ummumiy data amulomlar
    const [filter, setFilter] = useState([]); // filterlangan data malumotlari
    const [Id, setId] = useState(0); // Id olish
    const [inner, setInner] = useState([]); // tanlangan Idni olish uchun
    const data = {
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
    }
 
    return <Auth.Provider value={data}>{ children }</Auth.Provider>
}