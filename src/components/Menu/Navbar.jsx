import {AiOutlineMenu, AiOutlineMenuFold, AiOutlineSetting, AiOutlineBell} from 'react-icons/ai'

const Navbar = (props) => {

    const {active, isActive} = props

       

    return ( 
        <div className='bg-white h-16 p-5 mb-4 rounded shadow transition duration-500 ease-in-out'>
            <div className="grid grid-cols-12">
                <div className='col-span-1'>
                    <button onClick={ () => isActive(!active) }> {active? <AiOutlineMenuFold className='text-2xl'/> : <AiOutlineMenu className='text-2xl'/> } </button>
                </div>
                <div className="col-span-1 col-start-12 justify-end flex">
                    <button> <AiOutlineBell className='text-2xl'/> </button>
                    <button> <AiOutlineSetting className='text-2xl'/> </button>
                    <button></button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;