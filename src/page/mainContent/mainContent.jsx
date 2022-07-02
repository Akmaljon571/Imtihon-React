import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function MainContent() {
    const { Id, setId } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (Id == 0){
            navigate('/')
         } 
    }, []);


    return ( 
        'mif'
     );
}

export default MainContent;