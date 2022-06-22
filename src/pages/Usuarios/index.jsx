import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsersAction } from "../../actions/userActions";
import Box from "../../components/Elements/Box";
import Avatar from "../../components/Perfil/Avatar";
import Button from "../../components/Elements/Button"
import Badge from "../../components/Elements/Badge";

const IndexUsuarios = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector( state => state.users.users )

    useEffect(() => {
        dispatch(getAllUsersAction())
    }, [])


    return ( 
        <>
            <div className="grid grid-cols-2 gap-5">
                <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-5">
                    <div className="col-span-2 sm:col-span-1">
                        <Box>

                        </Box>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <Box>

                        </Box>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <Box>

                        </Box>
                    </div>
                    <div className="col-span-2 sm:col-span-1 ">
                        <Box className="flex justify-between flex-wrap gap-5">
                            <Link to="/areas"><Badge fontSize="text-base" badgeSize="w-20 h-20" badgeType="primary">Áreas</Badge></Link>
                            <Link to="/departamentos"><Badge fontSize="text-base" badgeSize="w-20 h-20" badgeType="secondary">Dptos</Badge></Link>
                            <Link to="/puestos"><Badge fontSize="text-base" badgeSize="w-20 h-20" badgeType="pink">Puestos</Badge></Link>
                        </Box>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 row-span-2">
                    <Box className="h-full"></Box>
                </div>

                <div className="col-span-2">
                    <Box className="overflow-auto">
                        <div className="flex my-2">
                            <Button className="ml-auto" btnType="secondary" fn={ () => navigate("/usuarios/registrar") }>
                               Nuevo Colaborador 
                            </Button>
                            
                        </div>
                        <table className="bg-white w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="bg-gray-100 text-left px-6 py-4 w-10">Foto</th>
                                    <th className="bg-gray-100 text-left px-6 py-4">Nombre</th>
                                    <th className="bg-gray-100 text-left px-6 py-4">Puesto</th>
                                    <th className="bg-gray-100 text-left px-6 py-4">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                users && users.length > 0 ?
                                    users.map ( (item, i) => (
                                    <tr key={i}>
                                        <td className="px-6 py-4"><Avatar className="w-10 h-10">{item.short_name}</Avatar></td>
                                        <td className="px-6 py-4">{`${item.name||''} ${item.lastName||''} ${item.secondLastNames||''}`}</td>
                                        <td className="px-6 py-4">Dante Sparks</td>
                                        <td className="px-6 py-4">{item.email||''}</td>
                                    </tr>
                                    ))
                                :
                                null
                                
                            }
                            
                            </tbody>
                        </table>
                    </Box>
                </div>
            </div>
        </>
     );
}
 
export default IndexUsuarios;