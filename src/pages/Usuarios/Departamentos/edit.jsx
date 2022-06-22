import { notification, Form, Select} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllAreasAction } from "../../../actions/areaActions";
import { cancelEditDepartamentoAction, createDepartamentoAction, getDepartamentoAction, updateDepartamentoAction } from "../../../actions/departamentoActions";
import Box from "../../../components/Elements/Box";
import Button from "../../../components/Elements/Button";
import Input from "../../../components/Elements/Input";
import Loading from "../../../components/Loading";

const EditDepartamento = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const departamento = useSelector( state => state.departamento.editing)
    const loading = useSelector ( state => state.departamento.loading)
    const areas = useSelector( state => state.area.areas)

    const params = useParams()

    const {id} = params
    const { Option } = Select;

    const [departamentoEdit, setDepartamentoEdit] = useState({
        nombre: '',
        descripcion: '',
        area_id: 0
    })

    useEffect(() => {
        if(!departamento){
            dispatch(getDepartamentoAction(params.id))
        }
        setDepartamentoEdit({...departamento})
        dispatch(getAllAreasAction())
    }, [departamento])

    const { nombre, descripcion, area_id } = departamentoEdit
    
    const handleChange = (e) => {
        e.preventDefault() 

        setDepartamentoEdit({
            ...departamentoEdit,
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
        dispatch( updateDepartamentoAction(id, departamentoEdit) ) 
    
        notification['success']({
            message: 'Departamento actualizada correctamente',
            description: 'Se ha actualizado departamento'
        })

        navigate('/departamentos')

    }

   

    const handleCancel = () => {
        dispatch(cancelEditDepartamentoAction())
        navigate('/departamentos')
    }
    if(loading) return <Loading/>

    console.log(area_id);
    return ( 
        <>
        <Box>
            <Form className="max-w-sm mx-auto py-10" onFinish={handleSubmit}>
                <h1 className="text-3xl text-center">Editar Departamento</h1>
                <div className="py-5">
                    <Input title="Departamento" inputName="nombre" value={nombre || ''} fn={handleChange}/>
                </div>
                <div className="py-5">
                    <Input title="Descripción" inputName="descripcion" value={descripcion || ''} fn={handleChange}/>
                </div>
                <div className="py-5">
                    {
                        area_id && area_id !== 0?
                        <>
                            <Select
                            defaultValue={area_id}
                            showSearch
                            placeholder="Selecciona un departamento"
                            optionFilterProp="children"
                            filterOption={(input, option) => option.children.includes(input)}
                            filterSort={(optionA, optionB) =>
                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                            }
                            onChange={(value) => setDepartamentoEdit({...departamento, area_id:value})}
                            className="w-full"
                        >
                            { areas && areas.length > 0 ?
                                areas.map( (item, index) => (
                                    <Option key={index} value={item.id}>{item.nombre}</Option>
                                ))
                            :
                            null }
                        </Select>
                        </>
                        :
                        null
                    }
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
 
export default EditDepartamento;