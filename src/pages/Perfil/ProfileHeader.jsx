import Box from "../../components/Elements/Box";
import Avatar from "../../components/Elements/Avatar";
import { Segmented } from 'antd';


const ProfileHeader = ({selectedUser, value, setValue, visit}) => {
    return ( 
        <>
            <Box className="h-60 w-full z-auto bg-[url('http://picsum.photos/2000/244')]">
                    
            </Box>
            <div className="w-full px-4 z-10">
                <Box className="w-full -mt-8 flex mb-5 flex-wrap gap-y-5 py-2 px-5 mr-5" >
                    <div className="md:w-16 w-full">
                        <Avatar picture={selectedUser.picture } userName={"Colaborador"} className="m-auto"/>
                    </div>
                    <div className="my-auto px-5 md:w-fit w-full text-center md:text-left">
                        <p className="font-bold text-custom-dark2">{`${selectedUser.name} ${selectedUser.lastName || ''} ${selectedUser.secondLastName || ''}`} </p>
                        <p className="text-sm font-light text-custom-dark2"> { selectedUser.position.nombre }</p>
                    </div>
                    { ! visit ?
                        <div className="bg-devarana-background my-auto flex max-w-[400px] w-full ml-auto rounded relative z-0">
                            <Segmented
                                block={true}
                                options={[
                                    {
                                        label: 'Perfil',
                                        value: 'Perfil',
                                        // icon: <FaRegUserCircle className="text-xs"/>
                                    },
                                    {
                                        label: 'Actividad',
                                        value: 'Actividad',
                                        // icon: <FiActivity className="text-xs"/>
                                    },
                                    {
                                        label: 'Configuración',
                                        value: 'Configuración',
                                        // icon: <GrDocumentConfig className="text-xs"/>
                                    }
                                ]}
                                
                                size={"middle"}
                                value={value} 
                                onChange={setValue}
                                className="flex w-full custom-dark2"
                            />
                        </div>
                        : null
                    }
                </Box>
            </div>
        </>
     );
}
 
export default ProfileHeader;