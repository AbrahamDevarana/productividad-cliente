import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAction, loginAction, regularLoginAction } from '../../actions/authActions';
import Logo from '../../assets/img/logos/devarana_login.svg'
import AntdNotificacion from '../../components/Antd/AntdNotification';
import { notification} from 'antd';
import {Link} from 'react-router-dom'

import Box from '../../components/Elements/Box'
import Button from '../../components/Elements/Button';


const Login = () => {

    const dispatch = useDispatch()

    const loginError = useSelector( state => state.login.error )

    const [login, setLogin] = useState({
        email: '',
        password:''
    })

    const { email, password } = login

    const handleChange = e => {
        e.preventDefault()

        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if( email.trim() === '' || password.trim() === ''){
            notification['error']({
                message: 'Datos Incompletos',
                description: 'Todos los datos son requeridos',
            });
            return null
        }
        dispatch(regularLoginAction(login))
    }

    const redirectToGoogleSSO = async() => {
        const googleLoginUrl = `${process.env.REACT_APP_URL}/auth/google`
        const newWindow = window.open(googleLoginUrl, "_blank", "width=500,height=600")

        if(newWindow){
            const timer = setInterval(() => {
                if(newWindow.closed){
                    dispatch(getUserAction())
                    if(timer){
                        clearInterval(timer)
                    }
                }
            }, 500)
        }
    }
    

    return ( 
        <Box className="bg-white max-w-[470px] w-full">
            <Box className="-my-10 mb-3 h-28 bg-gradient-to-tr from-custom-blue to-custom-blue2 flex" >
                <h1 className='text-white text-2xl align-middle m-auto'>Software</h1>
            </Box>
            <div className="px-5 pb-10">
                {loginError ? <AntdNotificacion errors={loginError} errorType={1} /> : null}
                <img src={Logo} alt="Devarana Logo" className='py-16 max-w-full block mx-auto object-cover' />                 
                {/* <form onSubmit={handleSubmit}>
                    <div className='pb-5'>
                        <h2 className='text-center font-bold text-4xl text-custom-dark2'>Bienvenido</h2>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={email} onChange={handleChange} className='w-full block border py-2 px-4'/>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' value={password} onChange={handleChange} className='w-full block border py-2 px-4'/>
                    </div>
                    <div>
                        <Button type="submit" btnType="secondary" className="block w-full"> Empezar </Button>    
                    </div>
                </form> */}
                    
                    <Button type="button" btnType="secondary" className="block w-full my-2" fn={redirectToGoogleSSO}> Empezar </Button>    
            </div>

        </Box>
    );
}
 
export default Login;