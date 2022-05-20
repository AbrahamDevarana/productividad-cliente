import {  Menu, Dropdown, Space } from "antd";
import { useEffect, useState } from "react";
import { DownOutlined } from '@ant-design/icons';
import Calendar from "../components/Tareas/Calendar";
import Lista from "../components/Tareas/Lista";
import { useDispatch, useSelector } from "react-redux";
import { getAllTareasAction, getOrderTareasAction } from "../actions/tareaActions";
import Loading from "../components/Loading";
import { getAllUsersAction } from "../actions/userActions";
import { getAllEstatusAction } from "../actions/estatusActions";
import { getAllTipoTareaAccion } from "../actions/tipoActions";

const Tarea = () => {

    const dispatch = useDispatch()

    const [view, setView] = useState(1)
    const tareas = useSelector( state => state.tareas.tareas)
    const loading = useSelector( state => state.tareas.loading )

    const [orden, setOrden] = useState({
        label: "",
        query: ""
    })

    const handleOrder = (label, query) => {
        setOrden({
            label: label,
            query: query
        })

        dispatch(getOrderTareasAction(query))
    }

    useEffect(() => {
        dispatch(getAllTareasAction())
        dispatch(getAllUsersAction())
        dispatch(getAllEstatusAction())
        dispatch(getAllTipoTareaAccion())
        // eslint-disable-next-line
    },[])

    const optFilter = (
        <Menu
          items={[
            {
              label: <button>1st menu item</button>,
              key: '0',
            },
            {
              label: <button>2nd menu item</button>,
              key: '1',
            },
            {
              label: '3rd menu item',
              key: '3',
            },
          ]}
        />
      );

      const optOrder = (
        <Menu
            items={[
                {
                    label: <p className="py-2" onClick={() => handleOrder("Fecha de entrega", "fin_periodo")}  >Fecha de entrega </p>,
                    key: '0'
                },
                {
                    label: <p className="py-2" onClick={() => handleOrder("Orden Alfabético", "nombre")} >Orden Alfabético</p>,
                    key: '1'
                },
                {
                    // label: <p className="py-2" onClick={() => handleOrder("Proyecto", "proyecto")} >Proyecto</p>,
                    key: '2'
                },
                {
                    label: <p className="py-2" onClick={() => handleOrder("Fecha de Inicio", "inicio_periodo")} >Fecha de creación</p>,
                    key: '3'
                },
            ]}
        />


      )
    

    //   if(loading) return <Loading/>
    return ( 
        <>
        <div className="shadow rounded bg-white p-4">
            <h1 className="text-3xl text-devarana-blue">Tareas</h1>

            <div className="inline-flex w-full">
                <button type="button" onClick={ () => { setView(1) } } className={`mx-2 text-xl text-devarana-graph hover:text-devarana-pink ${ view === 1? "" : ""}`}>Lista</button>
                <button type="button" onClick={ () => { setView(2) } } className={`mx-2 text-xl text-devarana-graph hover:text-devarana-pink ${ view === 2? "" : ""}`}>Calendar</button>
                {/* <button className="ml-auto px-4">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <button onClick={(e) => e.preventDefault()} className="flex justify-center">
                        <Space>
                            Ver
                            <DownOutlined />
                        </Space>
                        </button>
                    </Dropdown>
                </button> */}

                <div className="px-4 ml-auto">
                    <Dropdown overlay={optFilter} trigger={['click']}>
                        <button onClick={(e) => e.preventDefault()}>
                        <Space>
                            Filtro
                            <DownOutlined />
                        </Space>
                        </button>
                    </Dropdown>
                </div>
                <div className="px-4 cursor-pointer">
                    <Dropdown overlay={optOrder} trigger={['click']}>
                        <Space>
                            <span >Orden{`${orden.label !== "" ? ": "+orden.label : ""}`}</span>
                            <DownOutlined />
                        </Space>
                    </Dropdown>
                </div>
            </div>
            <div className="w-full mx-auto h-0.5 bg-devarana-graph opacity-40"></div>
        </div>


        <div className="my-4">
            {
                view === 1 ? 
                <Lista  tareas={tareas}/>
                :
                view === 2?
                <Calendar/>
                :
                null
                
            }
        </div>

        </>
     );
}
 
export default Tarea;