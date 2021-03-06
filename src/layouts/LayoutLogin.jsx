import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        // eslint-disable-next-line
    }, [auth])
    
    if(isAuthenticated && !loading) {
        navigate("/")
    }


    return ( 
       <div className="w-full flex justify-center bg-devarana-midnight bg-login h-screen items-center bg-cover">
           {children}
       </div>
     );
}
 
export default LayoutLogin;