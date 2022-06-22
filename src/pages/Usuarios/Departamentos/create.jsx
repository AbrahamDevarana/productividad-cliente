import { Form, notification, Select  } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAreasAction } from "../../../actions/areaActions";
import { createDepartamentoAction } from "../../../actions/departamentoActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import Input from "../../../components/Elements/Input";

const CreateDepartamentos = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const areas = useSelector( state => state.area.areas)
    const [departamento, setDepartamentos] = useState({
        nombre: '',
        descripcion: '',
    })

    const { nombre, descripcion, area_id} = departamento
    const { Option } = Select;

    useEffect(() => {
        dispatch(getAllAreasAction())
    }, [])

    const handleChange = (e) => {
        e.preventDefault() 

        setDepartamentos({
            ...departamento,
                [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {

        if(nombre.trim() === '' || descripcion.trim() === '' || !area_id){
            notification['error']({
                message: 'Datos incompletos',
                description: 'Todos los datos son requeridos'
            })
            return null
        }

        dispatch( createDepartamentoAction(departamento) ) 
    
        notification['success']({
            message: 'Departamento creada correctamente',
            description: 'Se ha creado nueva área'
        })

        navigate('/departamentos')
        

        
    }
    return ( 
        <>
        <Box>
            <Form className="max-w-md mx-auto py-10"  onFinish={handleSubmit}>
                <h1 className="text-3xl text-center">Registrar Nuevo Departamento</h1>
                <div className="py-5">
                    <Input title="Nombre del departamento" inputName="nombre" value={nombre} fn={handleChange}/>
                </div>
                <div className="py-5">
                    <Input title="Descripción" inputName="descripcion" value={descripcion} fn={handleChange}/>
                </div>

                <div className="py-5">
                    <Select
                        showSearch
                        placeholder="Selecciona un área"
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.includes(input)}
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                        onChange={(value) => setDepartamentos({...departamento, area_id:value})}
                        className="w-full"
                    >
                        { areas && areas.length > 0 ?
                            areas.map( (item, index) => (
                                <Option key={index} value={item.id}>{item.nombre}</Option>
                            ))
                        :
                        null }
                    </Select>
                </div>
                <div className="py-5 flex justify-between">
                    <Button fn={ () => navigate('/departamentos') } btnType="primary-outline">Cancelar</Button>
                    <Button btnType="secondary" type="submit"> + Agregar </Button>
                </div>

            </Form>
        </Box>
        </>
     );
}
 
export default CreateDepartamentos;