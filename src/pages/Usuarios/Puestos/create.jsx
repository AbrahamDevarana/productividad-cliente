import { Form, notification, Select  } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllAreasAction } from "../../../actions/areaActions";
import { createPuestoAction } from "../../../actions/puestoActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import Input from "../../../components/Elements/Input";

const CreatePuestos = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const areas = useSelector( state => state.area.areas)
    const [puesto, setPuestos] = useState({
        nombre: '',
        descripcion: '',
    })

    const { nombre, descripcion, area_id} = puesto
    const { Option } = Select;

    useEffect(() => {
        dispatch(getAllAreasAction())
    }, [])

    const handleChange = (e) => {
        e.preventDefault() 

        setPuestos({
            ...puesto,
                [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {

        if(nombre.trim() === '' || descripcion.trim() === ''){
            notification['error']({
                message: 'Datos incompletos',
                description: 'Todos los datos son requeridos'
            })
            return null
        }

        dispatch( createPuestoAction(puesto) ) 
    
        notification['success']({
            message: 'Puesto creada correctamente',
            description: 'Se ha creado nuevo puesto'
        })

        navigate('/puestos')
        

        
    }
    return ( 
        <>
        <Box>
            <Form className="max-w-md mx-auto py-10"  onFinish={handleSubmit}>
                <h1 className="text-3xl text-center">Registrar Nuevo Puesto</h1>
                <div className="py-5">
                    <Input title="Nombre del puesto" inputName="nombre" value={nombre} fn={handleChange}/>
                </div>
                <div className="py-5">
                    <Input title="Descripción" inputName="descripcion" value={descripcion} fn={handleChange}/>
                </div>

                
                <div className="py-5 flex justify-between">
                    <Button fn={ () => navigate('/puestos') } btnType="primary-outline">Cancelar</Button>
                    <Button btnType="secondary" type="submit"> + Agregar </Button>
                </div>

            </Form>
        </Box>
        </>
     );
}
 
export default CreatePuestos;