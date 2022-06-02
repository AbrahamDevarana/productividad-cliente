import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { regularLoginAction } from '../../actions/authActions';
import Logo from '../../assets/img/logos/LogoDevarana.png'
import AntdNotificacion from '../../components/Antd/AntdNotification';
import { notification} from 'antd';

import Box from '../../components/Elements/Box'



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

    return ( 
        <Box className=" bg-[rgba(255,255,255,0.5)] backdrop-blur-md border-[rgba(255,255,255,0.25)]">
            <div className="p-10">
                {loginError ? <AntdNotificacion errors={loginError} errorType={1} /> : null}
                <img src={Logo} alt="Devarana Logo" className='py-4 ax-w-full block mx-auto object-cover' />
                <h1 className='text-center text-devarana-blue pb-16'> Algo  </h1>
                 
                <form onSubmit={handleSubmit}>
                    <div className='pb-5'>
                        <h2 className='text-center'>Login Temporal</h2>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' value={email} onChange={handleChange} className='w-full block border py-2 px-4'/>
                        <label htmlFor="">Password</label>
                        <input type="password" name='password' value={password} onChange={handleChange} className='w-full block border py-2 px-4'/>
                    </div>
                    <div>
                        <button type='submit' className='border py-2 px-4 block w-full'> Iniciar Sesión </button>
                        {/* <LoginButton/> */}
                    </div>
                </form>
            </div>

        </Box>
    );
}
 
export default Login;