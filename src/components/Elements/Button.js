import '../../assets/scss/button.scss'

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
            default:
                return 'btn-primary';
        }
    }

    return ( 
        <button type={ type || "button" } onClick={fn} className={`${buttonType(btnType)} ${className || "" } py-2 px-4 rounded-[10px]` }>
            {children}
        </button>
     );
}
 
export default Button;