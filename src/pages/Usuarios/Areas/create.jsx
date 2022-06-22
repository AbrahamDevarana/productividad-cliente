import { Form, notification } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAreaAction } from "../../../actions/areaActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import Input from "../../../components/Elements/Input";

const CreateArea = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [area, setArea] = useState({
        nombre: '',
        descripcion: ''
    })

    const { nombre, descripcion } = area

    const handleChange = (e) => {
        e.preventDefault() 

        setArea({
            ...area,
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

        dispatch( createAreaAction(area) ) 
    
        notification['success']({
            message: 'Área creada correctamente',
            description: 'Se ha creado nueva área'
        })

        navigate('/areas')
        

        
    }
    return ( 
        <>
        <Box>
            <Form className="max-w-sm mx-auto py-10"  onFinish={handleSubmit}>
                <h1 className="text-3xl text-center">Registrar Nueva Área</h1>
                <div className="py-5">
                    <Input title="Área" inputName="nombre" value={nombre} fn={handleChange}/>
                </div>
                <div className="py-5">
                    <Input title="Descripción" inputName="descripcion" value={descripcion} fn={handleChange}/>
                </div>
                <div className="py-5 flex justify-between">
                    <Button fn={ () => navigate('/areas') } btnType="primary-outline">Cancelar</Button>
                    <Button btnType="secondary" type="submit"> + Agregar </Button>
                </div>

            </Form>
        </Box>
        </>
     );
}
 
export default CreateArea;