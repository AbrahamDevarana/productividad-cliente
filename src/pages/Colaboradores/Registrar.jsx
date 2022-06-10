import Box from "../../components/Elements/Box";
import { Steps } from 'antd';
import { useState } from "react";
import { notification, DatePicker, Select } from 'antd';
import moment from "moment";

import '../../assets/css/CustomSteps.css'
import '../../assets/css/CustomSelect.css'
import Input from "../../components/Elements/Input";
import Button from "../../components/Elements/Button"
import { createUserAction } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import AntdNotificacion from "../../components/Antd/AntdNotification";
import { Link, useNavigate } from "react-router-dom";


const RegistrarColaborador = () => {


    const registerError = useSelector( state => state.users.error)

    const { Step } = Steps; 
    const { Option } = Select;
    
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const [current, setCurrent] = useState(0);

    const [user, setUser] = useState({
        name: '',
        lastName: '',
        secondLastName: '',
        email: '',
        phone: '',
        birth_date: '',

        street: '',
        suburb: '',
        town_id: 0,
        birth_place: '',

        bachelor_degree:'',
        rol_id: '',
        position_id: '',
        department_id: '',
        admission_date:''
    })

    const {name, lastName, secondLastName, email, phone, birth_date, street, suburb, state, birth_place, town_id, bachelor_degree, rol_id, position_id, department_id, admission_date} = user

    const handleChange = (e) => {
        e.preventDefault()
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSteps = (current) => {
        switch (current) {
            case 0:
                if( name.trim() === '' || lastName.trim() === '' || secondLastName.trim() === '' || email.trim() === '' || phone.trim() === ''){
                    notification['error']({
                        message: 'Datos Incompletos',
                        description: 'Todos los datos de contacto son requeridos',
                    });
                    return null
                }
                setCurrent(current+1)
                break;
            case 1:
                if( street.trim() === '' || suburb.trim() === '' || birth_place.trim() === '' || town_id === 0){
                    notification['error']({
                        message: 'Datos Incompletos',
                        description: 'Todos los datos de domicilio son requeridos',
                    });
                    return null
                }
                setCurrent(current+1)
            break
    
                
            case 3:
                if( bachelor_degree.trim() === '' || rol_id === '' || position_id === '' || department_id === ''){
                    notification['error']({
                        message: 'Datos Incompletos',
                        description: 'Todos los datos de Devarana son requeridos',
                    });
                    return null
                }
                dispatch(createUserAction(user))
            break
                
        }
    }


    return ( 
    <>
        <div className="my-20 max-w-screen-lg mx-auto">
        {registerError ? <AntdNotificacion errors={registerError} errorType={1} /> : null}
            <Box className="px-10">
                <Box className="-my-12 px-16 bg-gradient-to-tr from-[#1a73e8] to-[#49a3f1]" >
                    <Steps current={current} progressDot={true}>
                        <Step onClick={()=>setCurrent(0)} title="Contacto" />
                        <Step onClick={()=>setCurrent(1)} title="Domicilio" />
                        <Step onClick={()=>setCurrent(2)} title="Profesional" />
                    </Steps>
                </Box>

                <div className={`pt-20 pb-5 ${current === 0? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl pb-8">Contacto</h1>
                    
                    <div className="grid grid-cols-2 gap-10">

                        <div className="col-span-1">
                            <div className="mx-auto border w-40 h-40">

                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="mb-8"><Input title="Nombre" className="" inputName="name" fn={handleChange} value={name}/> </div>
                            <div className="mb-8"><Input title="Apellido Paterno" className="" inputName="lastName" fn={handleChange} value={lastName}/> </div>
                            <div className="mb-8"><Input title="Apellido Materno" className="" inputName="secondLastName" fn={handleChange} value={secondLastName}/> </div>
                        </div>
                        <div className="col-span-1">
                            <DatePicker format={"DD - MM - YYYY"}  placeholder="Fecha de nacimiento" inputName="birth_date" value={birth_date || moment('1990/01/01', 'YYYY/MM/DD')} onChange={(date) => (setUser({...user, birth_date:date}))} className="w-full border-0 border-b" />
                        </div>
                        <div className="col-span-1">
                            <Input title="Email" type="mail" inputName="email" fn={handleChange} value={email}/> 
                        </div>
                        <div className="col-span-1">
                            <Input title="Teléfono" inputName="phone" fn={handleChange} value={phone}/> 
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between">
                            
                            <Button btnType="secondary-outline">
                                <Link to={ "/colaboradores" } className="hover:text-white"> Volver </Link>
                            </Button>
                            <Button btnType="secondary" fn={ () => handleSteps(current) }>Siguiente</Button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={`pt-20 pb-5  ${current === 1? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl pb-8">Domicilio</h1>
                    <div className="grid grid-cols-2 gap-10">

                        <div className="col-span-2">
                            <Input title="Calle y Número" inputName="street" fn={handleChange} value={street}/> 
                        </div>
                        <div className="col-span-1">
                            <Input title="Colonia" inputName="suburb" fn={handleChange} value={suburb} />
                        </div>
                        <div className="col-span-1">
                            <Input title="Municipio" inputName="town_id" fn={handleChange} value={town_id || 1}/> 
                        </div>
                        <div className="col-span-1">
                            <Input title="Estado" inputName="state" fn={handleChange} value={state || 'Querétaro'}/> 
                        </div>
                        <div className="col-span-1">
                            <Input title="Lugar de Origen" inputName="birth_place" fn={handleChange} value={birth_place}/> 
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between">
                                <Button btnType="secondary-outline" fn={ () => setCurrent(0) }>
                                    Volver
                                </Button>
                                <Button btnType="secondary" fn={ () => handleSteps(current) }>Siguiente</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`pt-20 ${current === 2? 'block' : 'hidden'}`}>
                <h1 className="text-2xl pb-8">Profesional</h1>
                    
                    <div className="grid grid-cols-2 gap-10">

                        <div className="col-span-1">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Lider de equipo"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.includes(input)}
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                            >
                                {/* TODO: obtener todas las posiciones */}
                                <Option value="" disabled>-- Selecciona lider -- </Option>
                                <Option value="1">Fátima Ortiz</Option>
                                
                            </Select>
                        </div>

                        <div className="col-span-1">
                            <Select
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Equipo"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.includes(input)}
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                            >
                                {/* TODO: obtener todas las posiciones */}
                                <Option value="" disabled>-- Selecciona equipo -- </Option>
                                <Option value="1">Equipo de Innovación y Calidad</Option>
                                
                            </Select>
                        </div>

                        <div className="col-span-1">
                            <Select
                                defaultValue={rol_id}
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Rol"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.includes(input)}
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                                onChange={(value) => setUser({...user, rol_id:value})}
                            >
                                {/* TODO: obtener todas las posiciones */}
                                <Option value="" disabled>-- Selecciona rol -- </Option>
                                <Option value="1">Presidente</Option>
                                <Option value="2">Dirección</Option>
                                <Option value="3">Gerente</Option>
                                <Option value="4">Colaborador</Option>
                                
                            </Select>
                        </div>

                        <div className="col-span-1">
                            <Select
                                defaultValue={department_id}
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Departamento"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.includes(input)}
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                                onChange={(value) => setUser({...user, department_id:value})}
                            >
                                {/* TODO: obtener todas las posiciones */}
                                <Option value="" disabled>-- Selecciona departamento -- </Option>
                                <Option value="1"> Innovación y Calidad </Option>
                                
                            </Select>
                        </div>

                        <div className="col-span-1">
                            <Select
                                defaultValue={position_id}
                                showSearch
                                style={{ width: '100%' }}
                                placeholder="Posición"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.includes(input)}
                                filterSort={(optionA, optionB) =>
                                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                }
                                onChange={(value) => setUser({...user, position_id:value})}
                            >
                                {/* TODO: obtener todas las posiciones */}
                                <Option value="" disabled>-- Selecciona posición -- </Option>
                                <Option value="1">Algo</Option>
                                
                            </Select>
                        </div>
                        <div className="col-span-1">
                            <Input title="Título" inputName="bachelor_degree" fn={handleChange} value={bachelor_degree}/> 
                        </div>
                        
                        <div className="col-span-1">
                            <DatePicker format={"DD - MM - YYYY"} placeholder="Fecha de ingreso" inputName="admission_date" value={admission_date || moment()} onChange={(date) => (setUser({...user, admission_date:date}))} className="w-full border-0 border-b" />
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between">
                                <Button btnType="secondary-outline" fn={ () => setCurrent(1) }>
                                    Volver
                                </Button>
                                <Button btnType="secondary" fn={ () => handleSteps(3) }>Registrar</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </Box>
        </div>
    </>
     );
}
 
export default RegistrarColaborador;