import '../assets/css/LoginButton.css'
import { loginAction } from '../actions/authActions';
import { useDispatch } from 'react-redux';


const LoginButton = (props) => {

    const dispatch = useDispatch()

    const Login = () => {
        dispatch(loginAction())
    }
    return ( 
        <button className="learn-more block mx-auto" onClick={ Login }>
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text"> Iniciar Sesión</span>
        </button>

     );
}
 
export default LoginButton;