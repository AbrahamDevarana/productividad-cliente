import { Link } from "react-router-dom";
import Avatar from "../Perfil/Avatar";
import { AiFillApple, AiOutlineSetting, AiFillCaretDown } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { useSelector } from "react-redux";
import { useState } from "react";



const Sidebar = (props) => {
    const { active } = props
    const userAuth = useSelector( state => state.login.user )

    const [config, setConfig] = useState(false)

    console.log(active);


    return ( 
    <aside className={`group transition-all duration-300 ease-in-out m-3 sm:left-0 -left-72 w-full fixed ${active? "w-[80px] sm:hover:w-[250px] fixed z-50 " : "w-[250px] left-0 z-50"}`}>
        <div className={`gradient-black rounded-ext p-5 flex flex-col sidebar-h transition-all duration-300 ease-in-out w-full overflow-auto`}>
            <a href="" className='text-center text-white'>Logo</a>
            <div className='divider w-full h-0.5'></div>
            <Link to={"/perfil"} className={`text-center text-white flex align-middle items-center ${ active ? "justify-center" : "ml-1"}`}>
                <Avatar className="w-8 h-8" /> <span className={ `${ active ? "hidden" : ""} mx-auto group-hover:block` }> {`${userAuth? `${userAuth.nick_name  || userAuth.name + ' ' + userAuth.lastName}`  : ''}`} </span>
            </Link>
            <div className='divider w-full h-0.5'></div>
            <Link to={"/"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}>
                <AiFillApple /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4` }> Actividades </span>
            </Link>
            <Link to={"/"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}>
                <AiFillApple /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4` }> Proyectos </span>
            </Link>
            <div className='divider w-full h-0.5'></div>
            <Link to={"/somos-devarana"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}>
                <AiFillApple /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4` }> Somos DEVARANA </span>
            </Link>
            <Link to={"/"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}>
                <AiFillApple /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4` }> Estrategía </span>
            </Link>
            <Link to={"/"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}>
                <AiFillApple /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4` }> Objetivos </span>
            </Link>

            <div className='divider w-full h-0.5'></div>
            <div className="mt-auto">
                <button onClick={() => setConfig(!config)} className={`flex items-center py-2 text-2xl text-white ${ active ? "mx-auto" : ""} group-hover:justify-start group-hover:mx-0`}>
                    <AiOutlineSetting /><span className={ `${ active ? "hidden" : "" } group-hover:block text-white px-4 text-center` }> Configuración </span>
                    { <AiFillCaretDown className={`transition duration-300 ease-in-out ${config ? 'rotate-180' : ''}  ${ active ? "hidden" : "" } group-hover:block`} /> }
                </button>
                <div className={ `transition-height duration-300 ease-in-out overflow-y-auto ${config? 'h-28' : 'h-0'}` }>
                    <div className="py-2">
                      
                        <Link to={"/colaboradores"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}> 
                            <FiUsers /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4 text-center font-light` }> Colaboradores </span>
                        </Link>
                        <Link to={"/colaboradores"} className={`flex items-center py-2 text-2xl text-white ${ active ? "justify-center" : ""} group-hover:justify-start`}> 
                            <FiUsers /><span className={ `${ active ? "hidden" : ""} group-hover:block text-white px-4 text-center font-light` }> Roles y Permisos </span>
                        </Link>
                    </div>
                </div>
            </div>
             
        </div>
    </aside> 
    );
}
 
export default Sidebar;
