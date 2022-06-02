import Box from "../Elements/Box";
import Badge from "../Elements/Badge";
import Input from "../Elements/Input";
import Textarea from "../Elements/Textarea";
import { DatePicker, Select, Divider, Switch } from 'antd';

import {AiOutlineUser, AiOutlineLink} from 'react-icons/ai'
import {AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare, AiFillFacebook } from 'react-icons/ai'

import { useEffect, useState } from "react";
import { notification} from 'antd';
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../actions/userActions";
import AntdNotificacion from '../../components/Antd/AntdNotification';


const Edit = ({selectedUser}) => {

    const LoginUser = useSelector( state => state.login.error )
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        id: selectedUser.id,
        name: '',
        email: '',
        lastName: '',
        secondLastName: '',
        profile_description: '',
        birth_date: '',
        admission_date: '',
        phone: '',
        active: '',
        social_linkedin: '',
        social_instagram: '',
        social_facebook: '',
        social_twitter: '',
    })

    const { name, email, lastName, secondLastName, profile_description, birth_date, phone, social_linkedin, social_instagram, social_facebook, social_twitter} = user

    useEffect(() => {
        setUser(selectedUser)
    }, [selectedUser])
    

    const [responsabilidades, setResponsabilidades] = useState([
        "Desarrollo Sitios Web",
        "Apicaciones Web",
        "CRM",
        "Comer"
    ])

    const handleChange = (e) => {
        e.preventDefault()

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmitPerfil = (e) => {
        e.preventDefault()

        if(name.trim() === '' || email.trim() === '' || lastName.trim() === '' || secondLastName.trim() === '' || birth_date.trim() === '' || phone.trim() === ''){
            notification['error']({
                message: 'Datos Incompletos',
                description: 'Todos tus son requeridos',
            });
            return null
        }
        dispatch(updateUserAction(user))

        
    }


    

    return ( 
        <>
            <div className="grid grid-cols-12 sm:gap-x-10 gap-y-10">
                {LoginUser ? <AntdNotificacion errors={LoginUser} errorType={1} /> : null}
                <div className="xl:col-span-3 sm:col-span-4 col-span-12 relative">
                    <div className="sticky top-0 w-full">
                        <Box className="flex flex-col">
                            <a href="#perfil" className="text-left py-1 my-1 px-2 ">Perfil</a>
                            <a href="#social" className="text-left py-1 my-1 px-2 ">Social</a>
                            <a href="#responsibilidades" className="text-left py-1 my-1 px-2">Responsabilidades</a>
                            <a href="#notificaciones" className="text-left py-1 my-1 px-2">Notificaciones</a>
                        </Box>
                    </div>
                    
                </div>
                <div className="xl:col-span-9 sm:col-span-8 col-span-12 snap-y">
                    <Box className="mb-5 snap-center pt-8 pb-14" id="perfil">
                        <div className="flex pb-10">
                            <Badge className="bg-gradient-to-tr from-green-600 to-green-400">
                                <AiOutlineUser/>
                            </Badge>
                            <h1 className="text-2xl my-auto mx-3">Información de perfil</h1>
                        </div>    

                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-4">
                                <Input title="Nombre" className="w-full" inputName="name" fn={handleChange} value={name} />
                            </div>
                            <div className="col-span-4">
                                <Input title="Apellidos Paterno" className="w-full" inputName="lastName" fn={handleChange} value={lastName} />
                            </div>
                            <div className="col-span-4">
                                <Input title="Apellidos Materno" className="w-full" inputName="secondLastName" fn={handleChange} value={secondLastName} />
                            </div>
                            <div className="col-span-4">
                                <DatePicker format={"DD - MM - YYYY"} placeholder="Fecha de nacimiento" name="birth_date" value={moment(birth_date)} className="w-full border-0 border-b" onChange={ (date) => setUser({...user,birth_date: date}) } />
                            </div>
                            <div className="col-span-4">
                                <Input title="Email" disabled={true} className="w-full" inputName="email" fn={handleChange} value={email} />
                            </div>
                            <div className="col-span-4">
                                <Input title="Teléfono" className="w-full" inputName="phone" fn={handleChange} value={phone} />
                            </div>
                            <div className="col-span-12">
                                <Textarea title="Sobre mi" className="w-full" inputName="profile_description" fn={handleChange} value={profile_description} />                            
                            </div>                           
                        </div>

                        <div className="flex py-10">
                            <Badge className="bg-gradient-to-tr from-blue-600 to-blue-400">
                                <AiOutlineLink/>
                            </Badge>
                            <h1 className="text-2xl my-auto mx-3">Social</h1>
                        </div>  
                        

                        <div className="grid grid-cols-4 gap-y-10 gap-x-5">
                            <div className="col-span-2 flex">
                                <div className="py-auto mx-2"><AiFillLinkedin className="text-2xl"/></div>
                                <Input title="Linkedin" inputName="social_linkedin" value={social_linkedin || ''} fn={handleChange}/> 
                                
                            </div>
                            <div className="col-span-2 flex">
                                <div className="py-auto mx-2"><AiFillInstagram className="text-2xl"/></div>
                                <Input title="Instagram" inputName="social_instagram" value={social_instagram || ''} fn={handleChange}/> 
                                
                            </div>
                            <div className="col-span-2 flex">
                                <div className="py-auto mx-2"><AiFillFacebook className="text-2xl"/></div>
                                <Input title="Facebook" inputName="social_facebook" value={social_facebook || ''} fn={handleChange}/> 
                                
                            </div>
                            <div className="col-span-2 flex">
                                <div className="py-auto mx-2"><AiFillTwitterSquare className="text-2xl"/></div>
                                <Input title="Twitter" inputName="social_twitter" value={social_twitter || ''} fn={handleChange}/> 
                            </div>
                            <div className="col-span-4">
                                <button className="block ml-auto border px-4 py-2" onClick={handleSubmitPerfil}> Guardar Perfil </button>
                            </div>        
                        </div>

                    </Box>
                    <Box className="mb-5 snap-center" id="responsibilidades">
                        <h1 className="text-2xl pb-8">Responsabilidades</h1>   
                        <div>

                            <ul>
                            {responsabilidades && responsabilidades.length ? 
                                responsabilidades.map( (item, index) => (
                                    <li key={index} className="text-sm">{item}</li>
                                ))
                                :
                                ""
                            }
                            </ul>
                            <Divider />
                            <div className="pt-2">
                                {/* <Input title="Responsabiliad" className="w-full" inputName="responsabilidad" value="responsabilidad_element"/> */}
                            </div>
                        </div>                     
                    </Box>
                    <Box className="mb-5 snap-center" id="notificaciones">
                        <h1 className="text-2xl pb-8">Notificaciones</h1> 
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="text-left">
                                    <th className="text-xl">Activity</th>
                                    <th className="text-xl">Email</th>
                                    <th className="text-xl">Push</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-gray-100">
                                    <td className="py-2 px-2">Menciones</td>
                                    <td><Switch defaultChecked className="bg-gray-800" /></td>
                                    <td><Switch /></td>
                                </tr>
                                <tr className="border border-gray-100">
                                    <td className="py-2 px-2">Asignaciones</td>
                                    <td><Switch defaultChecked /></td>
                                    <td><Switch /></td>
                                </tr>
                                <tr className="border border-gray-100">
                                    <td className="py-2 px-2">Por vencer</td>
                                    <td><Switch /></td>
                                    <td><Switch defaultChecked /></td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </Box>
                </div>
            </div>
        </>
     );
}
 
export default Edit;