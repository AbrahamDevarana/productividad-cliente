import { notification, Form } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cancelEditAreaAction, createAreaAction, getAreaAction, updateAreaAction } from "../../../actions/areaActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import Input from "../../../components/Elements/Input";
import Loading from "../../../components/Loading";

const EditArea = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const area = useSelector( state => state.area.editing)
    const loading = useSelector ( state => state.area.loading)
    
    const params = useParams()

    const {id} = params

    const [areaEdit, setAreaEdit] = useState({
        nombre: '',
        descripcion: ''
    })

    useEffect(() => {
        if(!area){
            dispatch(getAreaAction(params.id))
        }
        setAreaEdit({...area})
    }, [area])

    const { nombre, descripcion } = areaEdit
    
    const handleChange = (e) => {
        e.preventDefault() 

        setAreaEdit({
            ...areaEdit,
                [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

        if(nombre.trim() === '' || descripcion.trim() === ''){
            notification['error']({
                message: 'Datos incompletos',
                description: 'Todos los datos son requeridos'
            })
            return null
        }

        console.log(areaEdit);
        dispatch( updateAreaAction(id, areaEdit) ) 
    
        notification['success']({
            message: 'Área actualizada correctamente',
            description: 'Se ha actualizado nueva área'
        })

        navigate('/areas')

    }

   

    const handleCancel = () => {
        dispatch(cancelEditAreaAction())
        navigate('/areas')
    }
    if(loading) return <Loading/>

    return ( 
        <>
        <Box>
            <Form className="max-w-sm mx-auto py-10" onFinish={handleSubmit}>
                <h1 className="text-3xl text-center">Editar Área</h1>
                <div className="py-5">
                    <Input title="Área" inputName="nombre" value={nombre || ''} fn={handleChange}/>
                </div>
                <div className="py-5">
                    <Input title="Descripción" inputName="descripcion" value={descripcion || ''} fn={handleChange}/>
                </div>
                <div className="py-5 flex justify-between">
                    <Button type="button" fn={handleCancel} btnType="primary-outline">Cancelar</Button>
                    <Button btnType="secondary" type="submit"> + Agregar </Button>
                </div>

            </Form>
        </Box>
        </>
     );
}
 
export default EditArea;