import { Link, useNavigate, useLocation } from "react-router-dom";
import Avatar from "../Perfil/Avatar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Menu } from 'antd';
import "../../assets/scss/menu.scss"

import { AiFillApple, AiOutlineSetting, AiFillCaretDown } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'

import { FaProjectDiagram } from 'react-icons/fa'
import { BiNetworkChart } from 'react-icons/bi'



import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';

const Sidebar = (props) => {
    const { active } = props
    const location = useLocation() 
    
    const url = location.pathname

    const navigate = useNavigate()
    const userAuth = useSelector( state => state.login.user )


    function getItem(label, key, icon, children, type) {
        return {
          key,
          icon,
          children,
          label,
          type,
        };
    }

    const [openKeys, setOpenKeys] = useState(['sub1']);
    const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6' ,'sub7'];
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
        } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const items = [
        getItem('Actividades', 'sub1', <BiNetworkChart className={`${ active ? "justify-center" : ""}`}/>, [
          getItem('Planeación', '/planeacion'),
          getItem('Tareas', '/tareas'),
          getItem('Eureka', '/eureka'),
        ]),
        getItem('Proyectos', 'sub2', <FaProjectDiagram className={`${ active ? "justify-center" : ""}`}/>, [
          getItem('Proyecto', '/proyecto-1'),
          getItem('Proyecto', '/proyecto-2'),
        ]),
        getItem('','sub3', null, null, 'divider'),
        getItem('Somos DEVARANA', '/somos-devarana', <FaProjectDiagram className={`${ active ? "justify-center" : ""}`}/>),
        getItem('Estrategía', 'sub5', <FaProjectDiagram className={`${ active ? "justify-center" : ""}`}/>, [
            // getItem('Option 5', '/'),
            // getItem('Option 6', '/'),
        ]),
        getItem('Objetivos', 'sub6', <FaProjectDiagram className={`${ active ? "justify-center" : ""}`}/>, [
            getItem('Profesionales', '/profesionales'),
            getItem('Personales', '/personales'),
        ]),
        getItem('','sub7', null, null, 'divider'),
        getItem('Configuración', 'sub8', <AiOutlineSetting className={`${ active ? "justify-center" : ""}`}/>, [
            getItem('Colaboradores', '/colaboradores'),
            // getItem('Option 6', '/colaboradores'),
        ]),
      ]; 

    return ( 
    <aside className={`group transition-all duration-300 ease-in-out m-3 sm:left-0 -left-72 w-full fixed ${active? "w-[80px] sm:hover:w-[250px] fixed z-50 " : "w-[250px] left-0 z-50"}`}>
        <div className={`gradient-black rounded-ext p-5 flex flex-col sidebar-h transition-all duration-300 ease-in-out w-full overflow-auto`}>
            <a href="" className='text-center text-white'>Logo</a>
            <div className='divider w-full h-0.5'></div>
            
            <Link to={"/perfil"} className={`hover:bg-white hover:bg-opacity-50 ${url === '/perfil'? 'bg-white bg-opacity-50' : ''} rounded-ext text-center text-white flex align-middle items-center px-5 py-2 ${ active ? "justify-center px-0 group-hover:px-5" : "ml-1"}`}>
                <Avatar className="w-8 h-8" /> <span className={ `${ active ? "hidden" : ""} mx-auto group-hover:block` }> {`${userAuth? `${userAuth.nick_name  || userAuth.name + ' ' + userAuth.lastName}`  : ''}`} </span>
            </Link>
            <div className='divider w-full h-0.5'></div>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                onClick={ (item) => navigate(item.key)}
                items={items}
                className={`text-white bg-transparent ${ active ? "menu-opt" : ""}`}
                defaultSelectedKeys={[`${url}`]}
            />
        </div>
    </aside> 
    );
}
 
export default Sidebar;
