import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUserAction } from "../../actions/userActions";
import Actividad from "./Actividad";
import Edit from "./Edit";
import Profile from "./Profile"
import { useParams } from 'react-router-dom';

import ProfileHeader from "./ProfileHeader";

const PerfilVisit = () => {

    const dispatch = useDispatch()

    const userActive = useSelector( state => state.login.user )

    const userSearched = useSelector( state => state.users.userSearched )
    const loading = useSelector( state => state.users.loading )
    const {userSlug} = useParams()

    const [value, setValue] = useState('Perfil')
    
    useEffect(() => {
            if(userSlug){
                dispatch(searchUserAction(userSlug))
            }
        
    }, [userActive]) 
    
    if(loading || userSearched === null) return 'Cargando'   

    return ( 
        <>
            <ProfileHeader selectedUser = {userSearched} value={value} setValue={setValue} visit={true}/>
            {  value === 'Perfil'?
                <Profile selectedUser={userSearched} visit={true}/>
            :   value === 'Actividad'? <Actividad /> : value === 'Configuración' ? <Edit selectedUser={userSearched} visit={true}/> : null } 
        </>
    );
}
 
export default PerfilVisit;

