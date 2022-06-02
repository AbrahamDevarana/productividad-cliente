import { useEffect, useState } from "react"
import { getAccessToken } from "../api/auth"
import jwtDecode from 'jwt-decode';

export default function AuthProvider(){
   
    const [auth, setAuth] = useState(
        {
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: true,
        }
    )

    useEffect(() => {
        checkUserLogin(setAuth)
    },[])

    return auth
}

function checkUserLogin( setAuth ) {
    const accessToken = getAccessToken()

    if(accessToken){
        setAuth({
            user: jwtDecode(accessToken),
            token: accessToken,
            isAuthenticated: true,
            isLoading: false,
        })
    }else{
        setAuth({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
        })
    }
}