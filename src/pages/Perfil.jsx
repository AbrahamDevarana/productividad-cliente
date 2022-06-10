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

    if(loading || selectedUser === null ) return 'Cargando'

    

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
                        <p className="font-bold text-custom-dark2">{`${selectedUser.name} ${selectedUser.lastName} ${selectedUser.secondLastName}`} <span className="text-xs">({selectedUser.nick_name})</span></p>
                        <p className="text-sm font-light text-custom-dark2">Desarrollador Web | Innovación y Calidad</p>
                    </div>
                    <div className="bg-devarana-background my-auto flex max-w-[400px] w-full ml-auto rounded relative z-0">
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
                            className="flex w-full custom-dark2"
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

