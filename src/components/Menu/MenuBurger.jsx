import '../../assets/css/MenuBurger.css'
const MenuBurger = (props) => {
    
    const {active} = props
    return (         
        <button type="button" className={`hamburger ${active? 'active': ''}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
     );
}
 
export default MenuBurger;