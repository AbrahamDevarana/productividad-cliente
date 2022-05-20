import Loading from "../Loading";
import { DatePicker, Space, Select } from 'antd';
import AntdSelect from "../Antd/AntdSelect";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";
import { getAllEstatusAction } from "../../actions/estatusActions";


const Lista = ({tareas}) => {

const dispatch = useDispatch()
const estatus = useSelector( state => state.estatus.estatus )
const tipoAccion = useSelector( state => state.tipoAccion.tipoAccion )
const users = useSelector( state => state.users.users)


const { RangePicker } = DatePicker;

const onChangeTime = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

const onOk = (value) => {

}

const onChange = () =>{ 
    
}
    return ( 

        <div className="shadow rounded bg-white p-4 ">
           <table className="table-fixed w-full ">
                <thead>
                    <tr className="text-left font-mulish text-devarana-blue">
                        <th> Tarea </th>
                        <th className="font-normal text-center w-56">Fecha Entrega</th>
                        <th className="font-normal text-center"> Origen </th>
                        <th className="font-normal text-center"> Responsable </th>
                        <th className="font-normal text-center"> Colaboradores </th>
                        <th className="font-normal text-center"> Estatus </th>
                        <th className="font-normal text-center"> Tags </th>
                    </tr>
                </thead>
                <tbody>
                   {tareas && tareas.length > 0?
                        tareas.map( item => (
                            <tr key={item.id} >
                                <td className="py-3">{ item.nombre }</td>
                                <td>
                                    <Space direction="vertical" size="small">
                                  
                                    <RangePicker
                                        style={{ width: "100%", borderColor: "#a9c0e4", borderRadius: "5px"}}
                                        showTime={{ format: 'HH:mm' }}
                                        format="DD-MM-YYYY HH:mm"
                                        onChange={onChangeTime}
                                        onOk={onOk} 
                                        defaultValue={[moment(item.inicio_periodo, "YYYY-MM-DD HH:mm"), moment(item.fin_periodo, "YYYY-MM-DD HH:mm")]}
                                        />
                                    </Space>
                                </td>
                                <td className="text-center">
                                    <AntdSelect items={tipoAccion} onChange={onChange}  placeholder="Selecciona Origen" defaultValue={item.tipo_accion_id}/>    
                                </td>
                                <td className="text-center">
                                    <AntdSelect items={users} onChange={onChange}  placeholder="Selecciona Responsable" defaultValue={item.user_id}/>
                                </td>
                                <td className="text-center">
                                    <AntdSelect mode={"multiple"} items={users} onChange={onChange}  placeholder="Selecciona Responsable" defaultValue={[item.user_id, item.user_id]}/>
                                </td>
                                <td className="text-center">
                                    <AntdSelect items={estatus} onChange={onChange}  placeholder="Estatus" defaultValue={item.estatus_id}/>
                                </td>
                                <td className="text-center"> # Marketing </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td colSpan={4}>
                                <Loading/>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>  
        </div>
       
     );
}
 
export default Lista;