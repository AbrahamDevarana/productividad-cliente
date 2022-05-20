import Logo from '../../assets/img/logos/DEVARANA_gris.svg'
import MenuBurger from './MenuBurger'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillBellFill, BsFillChatLeftDotsFill, BsCalendarWeekFill} from 'react-icons/bs'
import {MdMenuBook} from 'react-icons/md'
import '../../assets/css/Notificacion.css'
import {  Menu, Dropdown, Space } from 'antd';
const Navbar = (props) => {

    const {active, isActive} = props
    const menu = (
        <Menu
          items={[
            {
              label: (
                <button target="_blank" className='profile-dropdown' rel="noopener noreferrer">
                  Perfil
                </button>
              ),
            },
            {
              label: (
                <button target="_blank" className='profile-dropdown' rel="noopener noreferrer">
                  Cerrar Sesión
                </button>
              ),
            },
            
           
          ]}
        />
      );

    return ( 
        <nav className='w-full h-14 bg-white flex shadow'>
            <div className='sm:max-w-[250px] max-w-[80px] flex flex-row'>
                <img src={Logo} alt="" className={`p-3 hidden m-auto w-[220px] sm:block`} />
            </div>
            
            <div className='w-full flex flex-row'>
                <div onClick={() => isActive(!active)} className="my-auto">
                    <MenuBurger active={active} /> 
                </div>
                {/* <div className='my-auto ml-auto py-2'>
                    <div className="icon-wrapper after:opacity-0" data-number="1">
                        <BsCalendarWeekFill className='text-2xl text-devarana-blue bell-icon'/>
                    </div>
                </div>
                <div className='my-auto ml-4 py-2'>
                    <div className="icon-wrapper after:opacity-0" data-number="1">
                        <BsFillChatLeftDotsFill className='text-2xl text-devarana-blue bell-icon'/>
                    </div>
                </div>
                <div className='my-auto ml-4 py-2'>
                    <div className="icon-wrapper after:opacity-0" data-number="1">
                        <MdMenuBook className='text-2xl text-devarana-blue bell-icon'/>
                    </div>
                </div> */}
                <div className='my-auto ml-auto py-2'>
                    <div className="icon-wrapper" data-number="1">
                        <BsFillBellFill className='text-2xl text-devarana-blue bell-icon'/>
                    </div>
                </div>
                <div className='my-auto ml-10'>
                    <label className="relative block">
                        <span className="sr-only">Search</span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <AiOutlineSearch/>
                        </span>
                        <input className="block bg-white w-full shadow border-0 rounded py-2 pl-9 pr-3 " placeholder="Buscar..." type="text" name="search"/>
                    </label>
                </div>
                

                <Dropdown overlay={menu} className="ml-6 sm:mr-10 mr-2 ">
                    <a onClick={e => e.preventDefault()}>
                    <Space className='flex h-full'>
                        <div className='bg-devarana-blue p-2 rounded-full text-devarana-pearl my-auto text-sm'>
                            AG
                        </div>
                    </Space>
                    </a>
                </Dropdown>
            </div>
        </nav>
     );
}
 
export default Navbar;