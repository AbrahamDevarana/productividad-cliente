import {AiOutlineMenu, AiOutlineMenuFold, AiOutlineSetting, AiOutlineBell} from 'react-icons/ai'
import { Dropdown, Menu, Space } from 'antd';
import { logoutAction } from '../../actions/authActions';
import { useDispatch } from 'react-redux';

const Navbar = (props) => {

    const {active, isActive} = props
    const dispatch = useDispatch()
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <button onClick={() => dispatch(logoutAction())}>
                  Logout
                </button>
              ),
            },
          ]}
        />
      );
    const notificaciones = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <span>
                  Se te ha designado una nueva <a className='font-bold'>tarea</a>
                </span>
              ),
            },
            {
              key: '2',
              label: (
                <span>
                  Tu <a className='font-bold'> tarea </a> esta por vencer
                </span>
              ),
            },
            {
              key: '3',
              label: (
                <span>
                    <a className='font-bold'>Fátima Ortiz</a> te ha asignado nueva <a className='font-bold'>tarea</a>
                </span>
              ),
            },
            {
              key: '4',
              label: (
                <span>
                  Se te ha designado una nueva<a className='font-bold'>tarea</a>
                </span>
              ),
            },
          ]}
        />
      );
       

    return ( 
        <div className='bg-white h-16 p-5 mb-4 rounded shadow transition duration-500 ease-in-out'>
            <div className="flex">
                <div className='sm:ml-0 ml-auto'>
                    <button onClick={ () => isActive(!active) }> {!active? <AiOutlineMenuFold className='text-2xl'/> : <AiOutlineMenu className='text-2xl'/> } </button>
                </div>
                <div className="sm:ml-auto flex">
                    <Dropdown overlay={notificaciones} trigger={['click']} className="px-2">
                        <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <AiOutlineBell className='text-2xl'/>
                        </Space>
                        </a>
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <AiOutlineSetting className='text-2xl'/>
                        </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;