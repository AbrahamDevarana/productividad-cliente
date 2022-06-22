import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCorporativoAction } from "../actions/somosDevaranaActions";
import { getAllUsersAction } from "../actions/userActions";
import Box from "../components/Elements/Box";
import Avatar from "../components/Perfil/Avatar";
import { Input } from 'antd';
import {AiFillEdit, AiFillSave} from 'react-icons/ai'

const SomosDevarana = () => {
    const { TextArea } = Input;
    const dispatch = useDispatch()
    const users = useSelector( state => state.users.users )
    const somosDevarana = useSelector( state => state.devarana.devarana)

    const [devarana, setDevarana] = useState({
        proposito: '',
        mision: '',
        vision: '',
        logotipo: '',
        isotipo: '',
        fortaleza: '',
        oportunidades: '',
        debilidades: '',
        amenazas: '',
        valores: [],
        competencias: [],
        responsabilidades: []
    })

    const {proposito, mision, vision, logotipo, isotipo, fortaleza, oportunidades, debilidades, amenazas, valores, competencias, responsabilidades} = devarana
    
    useEffect(() => {
        dispatch(getAllUsersAction())
        dispatch(getCorporativoAction())
        console.log("load data", somosDevarana);
    
      return () => {
        console.log("fill data");
        setDevarana(somosDevarana)
      }
    }, [])
    

    const handleChange = e => {
        e.preventDefault()
        setDevarana({
            ...devarana,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (fieldName) => {
    //    const input = document.getElementsByName(fieldName)[0]

    //    input.removeAttribute('disabled', false)
    //    input.classList.remove("ant-input-borderless")
    //    input.classList.remove("ant-input-disabled")
    }

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
            <Box className="col-span-4">
                <div className="flex">
                    <h2>PROPÓSITO</h2>
                    <p className="px-2">¿Qué hacemos?</p>
                    <AiFillSave className="ml-auto text-xl text-custom-dark2"/>
                    <AiFillEdit onClick={() => handleEdit('proposito')} className="text-xl text-custom-dark2"/>
                </div>
                <TextArea className="editFields px-0" name="proposito" onChange={handleChange} bordered={ false ? true : false } value={proposito} autoSize={ { minRows: 5 }} />
            </Box>
            <Box className="col-span-4">
                <div className="inline-flex">
                    <h2>MISIÓN</h2>
                    <p className="px-2">¿Para qué?</p>
                </div>
                    <p>{mision}</p>
            </Box>
            <Box className="col-span-4">
                <div className="inline-flex">
                    <h2>FUTURO</h2>
                    <p className="px-2">¿Cómo queremos ser?</p>
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
        </>
    );
}
 
export default SomosDevarana;