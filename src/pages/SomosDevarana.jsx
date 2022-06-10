import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../actions/userActions";
import Box from "../components/Elements/Box";
import Avatar from "../components/Perfil/Avatar";

const SomosDevarana = () => {

    const dispatch = useDispatch()
    const users = useSelector( state => state.users.users )

    useEffect(() => {
        dispatch(getAllUsersAction())
    }, [])

    //TODO
    return ( 
        <>
        <div>
            <Box className="bg-gradient-to-tr from-purple-600 to-purple-400 py-10">
            </Box>
            <Box className="my-5 py-5">
                <div className="flex">
                    { users && users.length > 0 ?
                        users.map( (item, i) => (
                            <Avatar key={i} className="w-10 h-10 mx-3">{item.short_name}</Avatar>
                        ))
                        :
                        <>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                            <Avatar className="w-10 h-10"></Avatar>
                        </>
                    }
                    
                </div>
            </Box>
        </div>

        <div className="grid grid-cols-12 gap-5">
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
            <Box className="col-span-4"></Box>
        </div>
        </>
    );
}
 
export default SomosDevarana;