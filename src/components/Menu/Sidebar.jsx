import {AiFillHome, AiFillStar} from 'react-icons/ai'
import {BiCalendarStar} from 'react-icons/bi'
import {FaListAlt, FaUserCog, FaUserPlus} from 'react-icons/fa'
import { BsGraphUp, BsUiChecksGrid } from 'react-icons/bs'
import { RiOrganizationChart } from 'react-icons/ri'
import { HiLightBulb } from 'react-icons/hi'
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom'



const Sidebar = (props) => {
    const { active } = props
    return ( 
    <aside className={`${active? 'max-w-[230px]' : 'max-w-[60px]'} overflow-x-hidden overflow-y-auto w-full bg-white shadow h-sider transition-all duration-200 ease-in-out`}>
        <div className='py-4 text-devarana-blue relative'>
            <div className="absolute w-full px-2">

                <Link to={'/'} className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <AiFillHome className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Home'> 
                        <AiFillHome className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Home</p>
                </Link>
                <Link to={'/tareas'} className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <FaListAlt className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Lista'> 
                        <FaListAlt className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Lista</p>
                </Link>
                {/* <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <BsGraphUp className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Informes'> 
                        <BsGraphUp className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Informes</p>                    
                </a> */}

                
                {/* <p className={`py-4 font-bold m-0 ${active? "" : "hidden"}`}>Objetivos</p>
                <Tooltip placement="right" title='Objetivos'>     
                    <p className={`text-ellipsis overflow-hidden py-4 font-bold m-0 ${active? "hidden" : ""}`}>Objetivos</p>
                </Tooltip>

                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <RiOrganizationChart className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Estratégicos'> 
                        <RiOrganizationChart className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Estratégicos</p>                    
                </a>
                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <HiLightBulb className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Iniciativas'> 
                        <HiLightBulb className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Iniciativas</p>                    
                </a>
                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <BsUiChecksGrid className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Mis Objetivos'> 
                        <BsUiChecksGrid className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Mis Objetivos</p>                    
                </a> */}

                <p className={`py-4 font-bold m-0 ${active? "" : "hidden"}`}>Proyectos</p>
                <Tooltip placement="right" title='Proyectos'>     
                    <p className={`text-ellipsis overflow-hidden py-4 font-bold m-0 ${active? "hidden" : ""}`}>Proyectos</p>
                </Tooltip>


                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <AiFillStar className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Proyecto 1'> 
                        <AiFillStar className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Proyecto 1 </p>                    
                </a>
                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <AiFillStar className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Proyecto 2'> 
                        <AiFillStar className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Proyecto 2 </p>                    
                </a>
                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <AiFillStar className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Proyecto 3'> 
                        <AiFillStar className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Proyecto 3 </p>                    
                </a>

                {/* <p className={`py-4 font-bold m-0 ${active? "" : "hidden"}`}>Administrador</p>
                <Tooltip placement="right" title='Administrador'>     
                    <p className={`text-ellipsis overflow-hidden py-4 font-bold m-0 ${active? "hidden" : ""}`}>Administrador</p>
                </Tooltip>

                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <BiCalendarStar className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Perspectivas'> 
                        <BiCalendarStar className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Perspectivas </p>                    
                </a>
                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <FaUserCog className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Roles'> 
                        <FaUserCog className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Roles </p>                    
                </a>
                <a className={`flex align-middle rounded-sm hover:bg-devarana-blue items-center text-devarana-blue hover:text-devarana-pearl py-2 ${ active? 'px-2': ''}`}>
                    <FaUserPlus className={ `text-2xl  ${active? "mr-10 ml-0" : "mx-auto hidden" }` }/>
                    <Tooltip placement="right" title='Usuarios'> 
                        <FaUserPlus className={ `text-2xl  ${active? "mr-10 ml-0 hidden" : "mx-auto" }` }/>
                    </Tooltip>
                    <p className={`my-0 mx-4 ${active? "" : "-z-50 hidden"} `}>  Usuarios </p>                    
                </a>                 */}
            </div>
        </div>
    </aside> 
    );
}
 
export default Sidebar;