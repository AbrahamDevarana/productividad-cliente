import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom"
import {  validateLoginAction } from '../actions/authActions'
import tokenAuth from '../config/tokenAuth'

import Sidebar from '../components/Menu/Sidebar'
import Navbar from '../components/Menu/Navbar'
import { Menu } from 'antd';
import { Dropdown, Modal, Drawer } from 'antd'

import { AiOutlinePlus } from 'react-icons/ai'
import NuevaTareaForm from '../components/Forms/NuevaTareaForm'
import AuthProvider from '../provider/AuthProvider'
import Settings from '../components/Menu/Settings'

const LayoutApp = ({children}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = AuthProvider()
    tokenAuth()

    const isAuthenticated = useSelector( state => state.login.isAuthenticated)
    const loading = useSelector( state => state.login.loading)

    useEffect(() => {
        // if(auth){
            dispatch(validateLoginAction(auth))
        // }
        // eslint-disable-next-line
    }, [auth])

    if(!isAuthenticated && !loading) {
        navigate("/login")
    }
    
    const [visible, setVisible] = useState({
        state: false,
        component: '',
        titulo: ''
    });
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [active, isActive] = useState(false)
    const [settingVisible, setSettingVisible] = useState(false);

    const {state,  component, titulo} = visible

    
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


	const onClose = () => {
		setSettingVisible(false);
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
            <div className='bg-devarana-background w-full min-h-screen'>
                <div className="flex relative">
                    <Sidebar active={active}/>
                    <div className={`p-4 transition-all duration-300 ease-in-out ml-auto ${active? "layout-size-90 group-hover:layout-size-260":"layout-size-260"} w-full relative `}> 
                        <Navbar active={active} isActive={isActive} settingVisible={settingVisible} setSettingVisible={setSettingVisible} />
                        {children}
                        <div className='fixed bottom-10 right-10'>
                            <Dropdown overlay={menu} trigger={['click']} placement="topRight">
                                <button className='shadow-[0px_2px_2px_rgba(0,0,0,.35)] px-4 py-2 bg-white hover:bg-devarana-blue rounded-ext hover:text-white font-bold transition-all duration-300 ease-in-out inline-flex align-middle'><AiOutlinePlus className='my-auto mx-1'/> Crear</button>
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

        <Drawer title="Configuración" placement="right" onClose={onClose} visible={settingVisible}>
            <Settings/>
        </Drawer>
        
    </> );
}

 
export default LayoutApp;
