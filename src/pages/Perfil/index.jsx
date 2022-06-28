import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../../actions/userActions";
import Actividad from "./Actividad";
import Edit from "./Edit";
import Profile from "./Profile"

import ProfileHeader from "./ProfileHeader";

const Perfil = () => {

    const dispatch = useDispatch()

    const userActive = useSelector( state => state.login.user )
    const selectedUser = useSelector( state => state.users.profile )
    const loading = useSelector( state => state.users.loading )

    const [value, setValue] = useState('Perfil')
    
    useEffect(() => {
        if(userActive !== null){

                dispatch(getProfileAction(userActive.id)) 
      
        }       
    }, [userActive]) 
    
    if(loading || selectedUser === null ) return 'Cargando'   

    return ( 
        <>
            <ProfileHeader selectedUser = {selectedUser} value={value} setValue={setValue}/>
            {  value === 'Perfil'?
                <Profile selectedUser={selectedUser}/>
            :   value === 'Actividad'? <Actividad /> : value === 'Configuración' ? <Edit selectedUser={selectedUser} /> : null } 
        </>
    );
}
 
export default Perfil;

