import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCorporativoAction, updateCorporativoAction } from "../actions/somosDevaranaActions";
import { getAllUsersAction } from "../actions/userActions";
import Box from "../components/Elements/Box";
import Avatar from "../components/Perfil/Avatar";
import Button from "../components/Elements/Button"
import { Input, Modal } from 'antd';
import {AiFillEdit} from 'react-icons/ai'

const SomosDevarana = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch()
    const users = useSelector( state => state.users.users )
    const somosDevarana = useSelector( state => state.devarana.devarana)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalConfig, setModalConfig] = useState({})

    const [devarana, setDevarana] = useState({})

    const {proposito, mision, vision, logotipo, isotipo, fortaleza, oportunidades, debilidades, amenazas, valores, competencias, responsabilidades} = somosDevarana
    
    useEffect(() => {
        dispatch(getAllUsersAction())
        dispatch(getCorporativoAction())
        // setDevarana(somosDevarana)          
    }, [])
    
    const handleChange = e => {        
        e.preventDefault()
        setDevarana({
            ...devarana,
            [e.target.name]: e.target.value
        })
    }

    const showModal = (data, title, maxLength) => {
        setModalConfig({
            title,
            maxLength
        })
        setDevarana( data )
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
        dispatch(updateCorporativoAction(devarana))
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setDevarana({ })
      };

    return ( 
        <>
        <div>
            <Box className="bg-gradient-to-tr from-purple-600 to-purple-400 py-20">
            </Box>
            <Box className="-my-10 py-5 mx-5 mb-10 glassMorph">
                <div className="flex">
                    { users && users.length > 0 ?
                        users.map( (item, i) => (
                            <Avatar key={i} className="w-10 h-10 mx-3">{item.short_name}</Avatar>
                        ))
                        :
                        null
                    }
                    
                </div>
            </Box>
        </div>

        <div className="grid grid-cols-12 gap-5">

        <Box className="col-span-6">
            <div className="flex">
                <h2>LOGOTIPO</h2>
                {/* <p className="px-2">¿Qué hacemos?</p> */}
                <AiFillEdit onClick={() => showModal( { 'logotipo': logotipo }, 'Logotipo', '200')} className="text-xl text-custom-dark2 ml-auto"/>
            </div>
            <p>{logotipo}</p>
        </Box>
        <Box className="col-span-6">
            <div className="flex">
                <h2>ISOTIPO</h2>
                {/* <p className="px-2">¿Para qué?</p> */}
                <AiFillEdit onClick={() => showModal({'isotipo': isotipo}, 'Isotipo', '200')} className="text-xl text-custom-dark2 ml-auto"/>
            </div>
                <p>{isotipo}</p>
        </Box>
            <Box className="col-span-4">
                <div className="flex">
                    <h2>PROPÓSITO</h2>
                    <p className="px-2">¿Qué hacemos?</p>
                    <AiFillEdit onClick={() => showModal( { 'proposito': proposito }, 'Propósito', '200')} className="text-xl text-custom-dark2 ml-auto"/>
                </div>
                <p>{proposito}</p>
            </Box>
            <Box className="col-span-4">
                <div className="flex">
                    <h2>MISIÓN</h2>
                    <p className="px-2">¿Para qué?</p>
                    <AiFillEdit onClick={() => showModal({'mision': mision}, 'Misión', '200')} className="text-xl text-custom-dark2 ml-auto"/>
                </div>
                    <p>{mision}</p>
            </Box>
            <Box className="col-span-4">
                <div className="flex">
                    <h2>FUTURO</h2>
                    <p className="px-2">¿Cómo queremos ser?</p>
                    <AiFillEdit onClick={() => showModal({'vision': vision}, 'Futuro', '200')} className="text-xl text-custom-dark2 ml-auto"/>
                </div>
                <p>{vision}</p>
            </Box>
            <Box className="col-span-6">
                <div>
                    <h2>Valores</h2>
                {
                        valores && valores.length > 0 ?
                        <>
                            {valores.map( (item, i) => <p> {item.nombre} </p> )}
                        </>
                        :
                        null    
                }
                </div>
            </Box>
            <Box className="col-span-6">
                <div>
                    <h2>Competencias</h2>
                    {
                            competencias && competencias.length > 0 ?
                            <>
                                {competencias.map( (item, i) => <p> {item.nombre} </p> )}
                            </>
                            :
                            null    
                    }
                </div>
            </Box>
            <Box className="col-span-12">
                <h2>Política de responsabilidad</h2>
            </Box>
            <Box className="col-span-3">
                <div className="inline-flex">
                    <h2>Medio Ambiente</h2>
                </div>
                <p>{vision}</p>
            </Box>
            <Box className="col-span-3">
                <div className="inline-flex">
                    <h2>Calidad</h2>
                </div>
                <p>{vision}</p>
            </Box>
            <Box className="col-span-3">
                <div className="inline-flex">
                    <h2>Bienestar</h2>
                </div>
                <p>{vision}</p>
            </Box>
            <Box className="col-span-3">
                <div className="inline-flex">
                    <h2>Seguridad</h2>
                </div>
                <p>{vision}</p>
            </Box>
        </div>


        <Modal title={modalConfig.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={[
                <Button fn={handleCancel} btnType="primary-outline" className="mx-2"> Cancel </Button>,
                <Button fn={handleOk} btnType="primary"> Guardar </Button>
            ]}
        >
            <TextArea maxLength={modalConfig.maxLength  || 220 } showCount={true} value={Object.values(devarana)[0]} name={Object.keys(devarana)[0]} onChange={handleChange} />
        </Modal>
        </>
    );
}
 
export default SomosDevarana;