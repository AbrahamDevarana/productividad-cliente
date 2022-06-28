import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getCorporativoAction, updateCorporativoAction } from "../../actions/somosDevaranaActions";
import { getAllUsersAction } from "../../actions/userActions";
import Box from "../../components/Elements/Box";
import Avatar from "../../components/Elements/Avatar";
import Button from "../../components/Elements/Button"
import { Input, Modal } from 'antd';
import {AiFillEdit} from 'react-icons/ai'
import Valores from "./Valores";
import Competencias from "./Competencias";

const SomosDevarana = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch()
    const users = useSelector( state => state.users.users )
    const somosDevarana = useSelector( state => state.devarana.devarana)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalConfig, setModalConfig] = useState({})

    const [devarana, setDevarana] = useState({})
    const [isAdmin, setAdmin] = useState(true)

    const {proposito, mision, vision, logotipo, isotipo, valores, competencias, responsabilidades, politica_responsabilidad} = somosDevarana
    
    useEffect(() => {
        dispatch(getAllUsersAction())
        dispatch(getCorporativoAction())     
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
                            <Link key={i} to={`/perfil/${item.slug}`}><Avatar className="w-10 h-10 mx-3">{item.short_name}</Avatar></Link>
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
                {isAdmin ? <AiFillEdit onClick={() => showModal( { 'logotipo': logotipo }, 'Logotipo', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
            </div>
            <p>{logotipo}</p>
        </Box>
        <Box className="col-span-6">
            <div className="flex">
                <h2>ISOTIPO</h2>
                {isAdmin ? <AiFillEdit onClick={() => showModal({'isotipo': isotipo}, 'Isotipo', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
            </div>
                <p>{isotipo}</p>
        </Box>
            <Box className="col-span-4">
                <div className="flex">
                    <h2>PROPÓSITO</h2>
                    <p className="px-2">¿Qué hacemos?</p>
                    {isAdmin ? <AiFillEdit onClick={() => showModal( { 'proposito': proposito }, 'Propósito', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                <p>{proposito}</p>
            </Box>
            <Box className="col-span-4">
                <div className="flex">
                    <h2>MISIÓN</h2>
                    <p className="px-2">¿Para qué?</p>
                    {isAdmin ? <AiFillEdit onClick={() => showModal({'mision': mision}, 'Misión', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                    <p>{mision}</p>
            </Box>
            <Box className="col-span-4">
                <div className="flex">
                    <h2>FUTURO</h2>
                    <p className="px-2">¿Cómo queremos ser?</p>
                    {isAdmin ? <AiFillEdit onClick={() => showModal({'vision': vision}, 'Futuro', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                <p>{vision}</p>
            </Box>
            <Box className="col-span-6">
                <div>
                    <Valores valores={valores} isAdmin={isAdmin}/>
                </div>
            </Box>
            <Box className="col-span-6">
                <div>
                    <Competencias competencias={competencias} isAdmin={isAdmin}/>
                </div>
            </Box>
            <Box className="col-span-12">
                <h2>Política de responsabilidad</h2>
                {isAdmin ? <AiFillEdit onClick={() => showModal( { 'politica_responsabilidad': politica_responsabilidad }, 'Politica de responsabilidad', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                <p>{politica_responsabilidad}</p>
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