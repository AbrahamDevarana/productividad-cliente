import { useEffect } from "react";

const LoginError = () => {
    useEffect(() => {
        setTimeout(() => {
            window.close()
        }, 1500)
    })
    return ( 
        <div className="p-5 text-white text-center">
            <h1 className="text-3xl">Usuario no activa</h1>
            <p className="text-2xl">Esta ventana se cerrará automaticamente</p>
        </div>
    );
}
 
export default LoginError;