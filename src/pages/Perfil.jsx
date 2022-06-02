import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, searchUserAction } from "../actions/userActions";
import Box from "../components/Elements/Box";
import Actividad from "../components/Perfil/Actividad";
import Avatar from "../components/Perfil/Avatar";
import Edit from "../components/Perfil/Edit";
import Profile from "../components/Perfil/Profile"
import { useParams } from 'react-router-dom';
import { Segmented } from 'antd';

import {FaRegUserCircle} from 'react-icons/fa'
import {FiActivity} from 'react-icons/fi'
import {GrDocumentConfig} from 'react-icons/gr'

const Perfil = () => {

    const dispatch = useDispatch()
    const [view, setView] = useState(1)

    const userActive = useSelector( state => state.login.user )
    const selectedUser = useSelector( state => state.users.user )
    const loading = useSelector( state => state.users.loading )

    const searched = useSelector (state => state.users.searched)

   const {userSlug} = useParams()

    useEffect(() => {
        if(userActive !== null){

            if(userSlug){
                dispatch(searchUserAction(userSlug))
            }else{
                dispatch(getUserAction(userActive.id)) 
            }
        }
    },[userActive]) 

    const [value, setValue] = useState('Perfil')
    if(loading) return 'Cargando'

    return ( 
        <>
            <Box className="h-56 w-full z-auto bg-[url('http://picsum.photos/2000/244')]">
                
            </Box>

            <div className="w-full px-5 z-10">
                <Box className="w-full -mt-8 flex mb-5 flex-wrap gap-y-5" >
                    <div className="md:w-20 w-full">
                        <Avatar picture="https://i.pravatar.cc/80" userName={"Colaborador"} className="m-auto"/>
                    </div>
                    <div className="my-auto px-5 md:w-fit w-full text-center md:text-left">
                        <p className="font-bold">{`${selectedUser.name} ${selectedUser.lastName} ${selectedUser.secondLastName}`}</p>
                        <p className="text-sm muted">Desarrollador Web | Innovación y Calidad</p>
                    </div>
                    <div className="bg-devarana-background my-auto flex max-w-[400px] w-full ml-auto rounded relative z-0">
                        {/* <div className={`transition-all rounded duration-500 shadow ease-in-out absolute sm:w-28 bg-white my-1 mx-2 top-0 right-0 bottom-0 -z-10 ${view === 1? 'left-0 w-14': view === 2 ? 'sm:left-1/3 w-20 left-16' : 'w-28 left-[54%] sm:left-2/3'}`}>

                        </div> */}
                        {/* <div onClick={ () => setView(1)} className={`w-14 sm:w-28 text-center rounded py-1 px-2 m-1.5 cursor-pointer`}>
                            Perfil
                        </div>
                        <div onClick={ () => setView(2)} className={`w-18 sm:w-28 text-center rounded py-1 px-2 m-1.5 cursor-pointer`}> 
                            Actividad 
                        </div>
                        <div onClick={ () => setView(3)} className={`sm:w-28 text-center rounded py-1 px-2 m-1.5 cursor-pointer`}>
                            Configuración
                        </div> */}
                        <Segmented
                            block={true}
                            options={[
                                {
                                    label: 'Perfil',
                                    value: 'Perfil',
                                    // icon: <FaRegUserCircle className="text-xs"/>
                                },
                                {
                                    label: 'Actividad',
                                    value: 'Actividad',
                                    // icon: <FiActivity className="text-xs"/>
                                },
                                {
                                    label: 'Configuración',
                                    value: 'Configuración',
                                    // icon: <GrDocumentConfig className="text-xs"/>
                                }
                            ]}
                            
                            size={"middle"}
                            value={value} 
                            onChange={setValue}
                            className="flex w-full"
                        />
                    </div>
                </Box>

                {   value === 'Perfil' ? 
                    <Profile selectedUser={selectedUser} searched={searched}/>
                :   value === 'Actividad'? <Actividad /> : value === 'Configuración' ? <Edit selectedUser={selectedUser} searched={searched}/> : null}
            </div>
        </>
    );
}
 
export default Perfil;

