import { useEffect, useState } from "react"
import { getAccessToken, refreshAccessToken, getRefreshToken } from "../api/auth"
import jwtDecode from 'jwt-decode';
import { logoutAction } from "../actions/authActions";


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
    }, [])

    return auth
}

function checkUserLogin( setAuth ) {
    const accessToken = getAccessToken()
    if(!accessToken){
        const refreshToken = getRefreshToken()
        if(!refreshToken){
            logoutAction()
            setAuth({
                user: null,
                token: null,
                isAuthenticated: false,
                isLoading: false,
            })
        }else{
            refreshAccessToken(refreshToken)
        }
    }else{
        setAuth({
            user: jwtDecode(accessToken),
            token: accessToken,
            isAuthenticated: true,
            isLoading: false,
        })
    }
}