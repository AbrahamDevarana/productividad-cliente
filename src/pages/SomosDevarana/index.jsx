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
import '../../assets/scss/cardReveal.scss';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import createDOMPurify from 'dompurify'

const SomosDevarana = () => {
    const { TextArea } = Input;
    const DOMPurify = createDOMPurify(window)
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
        // eslint-disable-next-line
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
            <Box className="h-60 bg-[url('http://picsum.photos/2000/244')] py-20">
            </Box>
            <Box className="-my-10 py-5 mx-5 mb-10 glassMorph overflow-hidden">
                {/* <div className="scroller">
                    { users && users.length > 0 ?
                        users.map( (item, i) => (
                         //     <Avatar className="w-10 h-10 mx-3">{item.short_name}</Avatar> 
                         <>
                         <div className="scroller-item">
                            <Link key={i} to={`/perfil/${item.slug}`}>
                                <Avatar className="w-10 h-10 mx-3" picture={item.picture}>{item.short_name}</Avatar> 
                            </Link>
                        </div>
                    </>
                    ))
                               
                           
                               
                        :
                        null
                    }
                </div> */}

                    <div className="logo-slider">
                    
                        <div>
                            { users && users.length > 0 ?
                                users.map( (item, i) => (
                                    <>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                    </>
                                ))

                                : null
                            }
                        </div>
                        
                        <div>
                        { users && users.length > 0 ?
                                users.map( (item, i) => (
                                    <>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                        <Link key={i} to={`/perfil/${item.slug}`}>
                                            <img src={item.picture} alt="" />
                                        </Link>
                                    </>
                                ))

                                : null
                            }
                        </div>
                        
                    </div>
            </Box>
        </div>

        <div className="grid grid-cols-12 gap-5">
            <Box className="col-span-12 md:col-span-4 bg-w-logotipo bg-auto bg-no-repeat bg-right">
                <div className="flex">
                    <h1 className="text-lg font-medium">Logotipo</h1>
                    {isAdmin ? <AiFillEdit onClick={() => showModal( { 'logotipo': logotipo }, 'Logotipo', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                {/* <p>{logotipo}</p> */}
                <div className="font-light" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(logotipo) }}></div>
            </Box>
            <Box className="col-span-12 md:col-span-4 bg-w-isotipo bg-no-repeat bg-right">
                <div className="flex">
                    <h1 className="text-lg font-medium">Isotipo</h1>
                    {isAdmin ? <AiFillEdit onClick={() => showModal({'isotipo': isotipo}, 'Isotipo', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                    {/* <p>{isotipo}</p> */}
                    <div className="font-light" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(isotipo) }}></div>
            </Box>
            <div className="md:col-span-4"></div>
            <Box className="col-span-6 md:col-span-4 bg-w-proposito bg-no-repeat bg-right">
                <div className="flex">
                    <div className="font-medium">
                        <h1 className="text-lg">Propósito</h1>
                        <p className="pt-3">¿Qué hacemos?</p>
                    </div>
                    {isAdmin ? <AiFillEdit onClick={() => showModal( { 'proposito': proposito }, 'Propósito', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                {/* <p>{proposito}</p> */}
                <div className="font-light" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(proposito) }}></div>
            </Box>
            <Box className="col-span-6 md:col-span-4 bg-w-mision bg-no-repeat bg-right">
                <div className="flex">
                    <div className="font-medium">
                        <h1 className="text-lg">Misión</h1>
                        <p className="pt-3">¿Para qué?</p>
                    </div>
                    {isAdmin ? <AiFillEdit onClick={() => showModal({'mision': mision}, 'Misión', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                    {/* <p>{mision}</p> */}
                    <div className="font-light" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(mision) }}></div>
            </Box>
            <Box className="col-span-6 md:col-span-4 bg-w-vision bg-no-repeat bg-right">
                <div className="flex">
                    <div className="font-medium">
                        <h1 className="text-lg">Futuro</h1>
                        <p className="pt-3">¿Cómo queremos ser?</p>
                    </div>
                    {isAdmin ? <AiFillEdit onClick={() => showModal({'vision': vision}, 'Futuro', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                {/* <p>{vision}</p> */}
                <div className="font-light" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(vision) }}></div>
            </Box>
            <Box className="col-span-12 md:col-span-6">
                <div>
                    <Valores valores={valores} isAdmin={isAdmin}/>
                </div>
            </Box>
            <Box className="col-span-12 md:col-span-6">
                <div>
                    <Competencias competencias={competencias} isAdmin={isAdmin}/>
                </div>
            </Box>
            <Box className="col-span-12 bg-w-legendario bg-no-repeat bg-right">
                <div className="flex">
                    <h1 className="text-lg font-medium">Política de responsabilidad</h1>
                    {isAdmin ? <AiFillEdit onClick={() => showModal( { 'politica_responsabilidad': politica_responsabilidad }, 'Politica de responsabilidad', '200')} className="text-xl text-custom-dark2 ml-auto cursor-pointer"/> : null }
                </div>
                {/* <p>{politica_responsabilidad}</p> */}
                <div className="font-light" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(politica_responsabilidad) }}></div>
            </Box>
            <Box className="col-span-6 md:col-span-3">
                <div className="card">  
                    <div className="card__content">
                        <h1 className="text-lg font-medium card__title">Medio Ambiente</h1>
                        <p className="card__description text-devarana-graph">{vision}</p>
                    </div>
                </div>
            </Box>
            <Box className="col-span-6 md:col-span-3">
                <div className="card">  
                    <div className="card__content">
                        <h1 className="text-lg font-medium card__title">Calidad</h1>
                        <p className="card__description">{vision}</p>
                    </div>
                </div>
            </Box>
            <Box className="col-span-6 md:col-span-3">
            <div className="card">
                <div className="card__content">
                        <h1 className="text-lg font-medium card__title">Bienestar</h1>
                        <p className="card__description">{vision}</p>
                    </div>
                </div>
            </Box>
            <Box className="col-span-6 md:col-span-3">
                <div className="card flex">
                    <div className="card__content">
                        <h1 className="text-lg font-medium card__title">Seguridad</h1>
                        <p className="card__description">{vision}</p>
                    </div>
                    {/* <div className="card__over">
                        Icono
                        <h2>Seguridad</h2>
                    </div> */}
                </div>
            </Box>
        </div>


        <Modal title={modalConfig.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={800} className="overflow-hidden"
            footer={[
                <Button fn={handleCancel} btnType="primary-outline" className="mx-2"> Cancel </Button>,
                <Button fn={handleOk} btnType="primary"> Guardar </Button>
            ]}
        >
            <CKEditor
                    editor={ ClassicEditor }
                    className="h-40"
                    data={Object.values(devarana)[0]}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                        editor.editing.view.change((writer) => {
                            writer.setStyle(
                                "height",
                                "400px",
                                editor.editing.view.document.getRoot()
                            )
                        })
                    } }
                    
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDevarana({
                            ...devarana,
                            [Object.keys(devarana)[0]]: data
                        })
                    } }
                />
            {/* <TextArea maxLength={modalConfig.maxLength  || 220 } showCount={true} value={Object.values(devarana)[0]} name={Object.keys(devarana)[0]} onChange={handleChange} /> */}
        </Modal>
        </>
    );
}
 
export default SomosDevarana;