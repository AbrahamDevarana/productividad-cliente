import '../../assets/scss/button.scss'
import "../../assets/scss/links.scss";
import { FaTrash, FaLongArrowAltRight, FaEdit } from 'react-icons/fa';

const Button = ({children, btnType, className, type, fn, ...props}) => {

    const buttonType = (btnType) => {
        switch(btnType) {
            case 'primary':
                return 'btn-primary';
            case 'secondary':
                return 'btn-secondary';
            case 'primary-outline':
                return 'btn-primary-outline';
            case 'secondary-outline':
                return 'btn-secondary-outline';
            case 'success':
                return 'btn-success';
            case 'danger':
                return 'btn-danger';
            case 'warning':
                return 'btn-warning';
            case 'view':
                return {
                    class: 'link-view inline-flex items-center',
                    icon: <FaLongArrowAltRight className="mx-2 text-sm" />
                };
            case 'edit':
                return {
                    class: 'link-edit inline-flex items-center',
                    icon: <FaEdit className="mx-2 text-sm" />
                };
            case 'delete':
                return {
                    class: 'link-delete inline-flex items-center',
                    icon: <FaTrash className="mx-2 text-sm" />
                };
            default:
                return 'btn-primary';
        }
    }

    // function createRipple(event, fn) {
    //     const button = event.currentTarget;
    
    //     const circle = document.createElement("span");
    //     const diameter = Math.max(button.clientWidth, button.clientHeight);
    //     const radius = diameter / 2;
        
    //     circle.style.width = circle.style.height = `${diameter}px`;
    //     circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    //     circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    //     circle.classList.add("ripple");
    
    //     const ripple = button.getElementsByClassName("ripple")[0];
    //     if (ripple) {
    //       ripple.remove();
    //     }
    
    //     button.appendChild(circle);

    //     fn()
    //   }
    


    return ( 
        <button type={ type || "button" } onClick={fn} className={`${ buttonType(btnType).class || buttonType(btnType) }  ${className || "" } py-2 px-4 rounded-[10px]` }>
            {buttonType(btnType).icon || children  }
        </button>
     );
}
 
export default Button;