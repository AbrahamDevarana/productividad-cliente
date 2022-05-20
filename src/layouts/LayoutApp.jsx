import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom"
import { logoutAction, getUserAction } from '../actions/authActions'
import tokenAuth from '../config/tokenAuth'

import Sidebar from '../components/Menu/Sidebar'
import Navbar from '../components/Menu/Navbar'
import { Dropdown, Menu, Modal } from 'antd'

import { AiOutlinePlus } from 'react-icons/ai'
import NuevaTareaForm from '../components/Forms/NuevaTareaForm'


const LayoutApp = ({children}) => {
    
    // const { auth } = useSelector( state => state.auth)

    // const dispatch = useDispatch()
    // const navigate = useNavigate()


    // const tkn = localStorage.getItem('Bearer')
    // tokenAuth(tkn)

    // useEffect( () => {
    //     if ( !auth && !tkn){
    //         if(tkn === null){
    //             navigate("/login")
    //         }
    //     }
        
    //     dispatch(getUserAction())
        
    //     // eslint-disable-next-line
    // }, [tkn])

    // const logOut = () => {
    //     dispatch(logoutAction())
    //     navigate('/login')
    // }

    
    const [visible, setVisible] = useState({
        state: false,
        component: '',
        titulo: ''
    });
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [active, isActive] = useState(false)

    const {state, opt, component, titulo} = visible

    
    const showModal = (opt) => {

        let itemComponent = ''
        let tituloModal = ''
        switch (opt) {
            case 1:
                itemComponent = <NuevaTareaForm/>
                tituloModal = "Nueva Acción / Tarea"
            break;

            case 2:
                tituloModal = "Nuevo Proyecto"
            break;

            case 3: 
                tituloModal = "Nuevo Objetivo"
            break;

            case 4:
                tituloModal = "Crear Action Plan / Sprint"
            break;
            default:
                break;
        }
        setVisible({
            state: true,
            component: itemComponent,
            titulo: tituloModal
        });
      };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible({
              state:false,
              component: ''
          });
          setConfirmLoading(false);
        }, 2000);
    };
    
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible({
            state:false,
            component: ''
        });
    };

    
      

    const menu = (
        <Menu
          items={[
            {
              label: <button onClick={ () => showModal(1) } className='modalButton'>Tarea</button>,
              key: '0',
            },
            {
              label: <button onClick={ () => showModal(2) } className='modalButton'>Proyecto</button>,
              key: '1',
            },
            {
              label: <button onClick={ () => showModal(3) } className='modalButton'>Objetivo</button>,
              key: '2',
            },
            {
              label: <button onClick={ () => showModal(4) } className='modalButton'>Action Plan</button>,
              key: '3',
            },
          ]}
        />
      );

    return ( 
    <>
        <div className='w-full'>    
            <div className='bg-devarana-background w-full min-h-screen overflow-hidden'>
                    <Navbar active={active} isActive={isActive} />
                <div className="flex relative">
                    <Sidebar active={active} />
                    <div className={`p-4 transition-all duration-500 ease-in-out w-full ml-auto relative`}> 
                        {children}

                        <div className='fixed bottom-10 right-10'>
                            <Dropdown overlay={menu} trigger={['click']} placement="topRight">
                                <button className='shadow-[0px_2px_2px_rgba(0,0,0,.35)] px-4 py-2 bg-white hover:bg-devarana-blue rounded-sm hover:text-white font-bold transition-all duration-300 ease-in-out inline-flex align-middle'><AiOutlinePlus className='my-auto mx-1'/> Crear</button>
                            </Dropdown>

                            <Modal
                                title={titulo}
                                visible={state}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                            >
                                { component } 
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </> );
}

 
export default LayoutApp;
