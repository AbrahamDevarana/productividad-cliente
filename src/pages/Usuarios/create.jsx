import Box from "../../components/Elements/Box";
import { useEffect, useState } from "react";
import { notification, DatePicker, Select, Steps, Checkbox } from 'antd';
import moment from "moment";

import '../../assets/css/CustomSteps.css'
import '../../assets/css/CustomSelect.css'
import Input from "../../components/Elements/Input";
import Button from "../../components/Elements/Button"
import { createUserAction } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import AntdNotificacion from "../../components/Antd/AntdNotification";
import { useNavigate } from "react-router-dom";
import { getEstados, getMunicipios } from "../../actions/locationActions";
import { getDepartamentoAreaAction } from "../../actions/departamentoActions";
import { getAllAreasAction } from "../../actions/areaActions";
import { getAllPuestosAction } from "../../actions/puestoActions";


const RegistrarUsuarios = () => {



    const estados = useSelector( state => state.location.estados)
    const municipios = useSelector( state => state.location.municipios)
    const registerError = useSelector( state => state.users.error)

    const areas = useSelector( state => state.area.areas )
    const departamentos = useSelector( state => state.departamento.departamentos)
    const puestos = useSelector( state => state.puesto. puestos )

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
        birth_place: '',

        bachelor_degree:'',
        rol_id: 0,
        position_id: 0,
        department_id: 0,
        admission_date:'',

        isLeader: false,
    })

    
    useEffect(() => {
        dispatch(getEstados())
        dispatch(getAllAreasAction())
        dispatch(getAllPuestosAction())
        
    }, [])
    

    const {name, lastName, secondLastName, email, phone, birth_date, street, suburb, isLeader, birth_place, town_id, bachelor_degree, rol_id, position_id, department_id, admission_date} = user

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
                console.log(user);
                dispatch(createUserAction(user))

                notification['success']({
                    message: 'Usuario Creado',
                    description: 'Usuario creado correctamente',
                });

                navigate('/usuarios')
            break
                
        }
    }

    const handleFilter = async (id) => {
        dispatch(getDepartamentoAreaAction(id))
    }

    const handleChangeEstado = (id) => {
        dispatch(getMunicipios(id))
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
                            <DatePicker format={"DD-MM-YYYY"}  placeholder="Fecha de nacimiento" inputName="birth_date" defaultPickerValue={moment("01-01-1990", "DD-MM-YYYY")} onChange={(date, dateString) => (setUser({...user, birth_date: dateString }))} className="w-full border-0 border-b" />
                        </div>
                        <div className="col-span-1">
                            <Input title="Email" type="mail" inputName="email" fn={handleChange} value={email}/> 
                        </div>
                        <div className="col-span-1">
                            <Input title="Teléfono" inputName="phone" fn={handleChange} value={phone}/> 
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between">
                            
                            <Button btnType="primary-outline" fn={() => navigate("/usuarios")}>
                                Volver
                            </Button>
                            <Button btnType="secondary" fn={ () => handleSteps(current) }>Siguiente</Button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className={`pt-20 pb-5  ${current === 1? 'block' : 'hidden'}`}>
                    <h1 className="text-2xl pb-8">Domicilio</h1>
                    <div className="grid grid-cols-2 gap-10">

                        <div className="col-span-1">
                            <Select
                                showSearch
                                placeholder= "Seleccionar Estado"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                filterSort={false}
                                onChange={(value) => handleChangeEstado(value)}
                                className="w-full"
                            >
                                {
                                    estados && estados.length > 0 ?
                                        estados.map( ( item, index) => (
                                            <Option key={index} value={item.id}>{item.nombre}</Option>
                                        ))
                                        :
                                        null
                                }
                                
                            </Select>
                        </div>
                        <div className="col-span-1">
                            <Select
                                showSearch
                                placeholder= "Seleccionar Municipio"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                filterSort={false}
                                onChange={(value) => setUser({...user, town_id:value})}
                                
                                className="w-full"
                            >
                                {
                                    municipios && municipios.length > 0 ?
                                        municipios.map( ( item, index) => (
                                            <Option key={index} value={item.id}>{item.nombre}</Option>
                                        ))
                                        :
                                        null
                                }
                                
                            </Select>
                        </div>
                        <div className="col-span-2">
                            <Input title="Calle y Número" inputName="street" fn={handleChange} value={street}/> 
                        </div>
                        <div className="col-span-1">
                            <Input title="Colonia" inputName="suburb" fn={handleChange} value={suburb} />
                        </div>                       
                        <div className="col-span-1">
                            <Input title="Lugar de Origen" inputName="birth_place" fn={handleChange} value={birth_place}/> 
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between">
                                <Button btnType="primary-outline" fn={ () => setCurrent(0) }>
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
                                className="w-full"
                                placeholder="Área"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                filterSort={false}
                                onChange={(value) => handleFilter(value)}
                            >
                                {
                                    areas && areas.length > 0 ?
                                        areas.map( ( item, i) => (
                                            <Option key={item.id} value={item.id}>{item.nombre}</Option>
                                        ))
                                        :
                                        null
                                }
                            </Select>
                        </div>

                        <div className="col-span-1">
                            {
                                departamentos && departamentos.length > 0?
                                
                                <Select
                                    showSearch
                                    className="w-full"
                                    placeholder="Departamento"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                    filterSort={false}
                                    onChange={(value) => setUser({...user, department_id:value})}
                                >
                                    {
                                        departamentos && departamentos.length > 0 ?
                                            departamentos.map( ( item, index) => (
                                                <Option key={index} value={item.id}>{item.nombre}</Option>
                                            ))
                                            :
                                            null
                                    }
                                    
                                </Select>
                                :  
                                <>
                                    <p className="text-custom-gray font-light">No se encontraron departamentos, seleccione otra área</p>
                                </>
                            }
                        </div>

                        <div className="col-span-1">
                            <Select
                                showSearch
                                className="w-full"
                                placeholder="Rol"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                filterSort={false}
                                onChange={(value) => setUser({...user, rol_id:value})}
                            >
                                {/* TODO: obtener todas las posiciones */}
                                <Option value={1}>Presidente</Option>
                                <Option value={2}>Dirección</Option>
                                <Option value={3}>Gerente</Option>
                                <Option value={4}>Usuarios</Option>
                                
                            </Select>
                        </div>

                        <div className="col-span-1">
                            <Checkbox onChange={ () => setUser({...user, isLeader: !isLeader})} className="text-custom-dark2 font-light w-full">Es Lider?</Checkbox>
                        </div>

                        <div className="col-span-1">
                        <Select
                                showSearch
                                className="w-full"
                                placeholder="Puestos"
                                optionFilterProp="children"
                                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                                filterSort={false}
                                onChange={(value) => setUser({...user, position_id:value})}
                            >
                                {
                                    puestos && puestos.length > 0 ?
                                        puestos.map( ( item, i) => (
                                            <Option key={item.id} value={item.id}>{item.nombre}</Option>
                                        ))
                                        :
                                        null
                                }
                            </Select>
                        </div>
                        <div className="col-span-1">
                            <Input title="Título" inputName="bachelor_degree" fn={handleChange} value={bachelor_degree}/> 
                        </div>
                        
                        <div className="col-span-1"> 
                            <DatePicker format={"DD-MM-YYYY"} placeholder="Fecha de ingreso" inputName="admission_date" defaultPickerValue={admission_date} onChange={(date, dateString) => (setUser({...user, admission_date:dateString}))} className="w-full border-0 border-b" />
                        </div>
                        <div className="col-span-2">
                            <div className="flex justify-between">
                                <Button btnType="primary-outline" fn={ () => setCurrent(1) }>
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
 
export default RegistrarUsuarios;