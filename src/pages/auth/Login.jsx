import Logo from '../../assets/img/logos/LogoDevarana.png'
import LoginButton from '../../components/LoginButton'




const Login = () => {
    return ( 
        <div className="border rounded shadow bg-white">
            <div className="p-10">
                <img src={Logo} alt="Devarana Logo" className='py-4 ax-w-full block mx-auto object-cover' />
                <h1 className='text-center text-devarana-blue pb-16'> MondayAsanaClickUpOKR </h1>
                 
                <div>
                    <LoginButton/>
                </div>
            </div>

        </div>
    );
}
 
export default Login;