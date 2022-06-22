import { notification, Form } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { cancelEditPuestoAction, createPuestoAction, getPuestoAction, updatePuestoAction } from "../../../actions/puestoActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import Input from "../../../components/Elements/Input";
import Loading from "../../../components/Loading";

const EditPuesto = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const puesto = useSelector( state => state.puesto.editing)
    const loading = useSelector ( state => state.puesto.loading)
    
    const params = useParams()

    const {id} = params

    const [puestoEdit, setPuestoEdit] = useState({
        nombre: '',
        descripcion: ''
    })

    useEffect(() => {
        if(!puesto){
            dispatch(getPuestoAction(params.id))
        }
        setPuestoEdit({...puesto})
    }, [puesto])

    const { nombre, descripcion } = puestoEdit
    
    const handleChange = (e) => {
        e.preventDefault() 

        setPuestoEdit({
            ...puestoEdit,
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
        dispatch( updatePuestoAction(id, puestoEdit) ) 
    
        notification['success']({
            message: 'Puesto actualizada correctamente',
            description: 'Se ha actualizado puesto'
        })

        navigate('/puestos')

    }

   

    const handleCancel = () => {
        dispatch(cancelEditPuestoAction())
        navigate('/puestos')
    }
    if(loading) return <Loading/>

    return ( 
        <>
        <Box>
            <Form className="max-w-sm mx-auto py-10" onFinish={handleSubmit}>
                <h1 className="text-3xl text-center">Editar Puesto</h1>
                <div className="py-5">
                    <Input title="Puesto" inputName="nombre" value={nombre || ''} fn={handleChange}/>
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
 
export default EditPuesto;