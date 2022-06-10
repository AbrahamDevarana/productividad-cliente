import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tokenAuth from '../config/tokenAuth'
import {validateLoginAction } from '../actions/authActions'
import AuthProvider from "../provider/AuthProvider";

const LayoutLogin = ({children}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = AuthProvider()

    const isAuthenticated = useSelector( state => state.login.isAuthenticated)
    const loading = useSelector( state => state.login.loading)

    useEffect(() => {
        dispatch(validateLoginAction(auth))
    }, [auth])
    
    if(isAuthenticated && !loading) {
        navigate("/")
    }


    return ( 
       <div className="w-full flex justify-center bg-devarana-midnight h-screen items-center bg-cover">
           {children}
       </div>
     );
}
 
export default LayoutLogin;