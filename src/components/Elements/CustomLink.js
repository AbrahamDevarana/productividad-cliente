import { Link } from "react-router-dom";
import { FaTrash, FaLongArrowAltRight, FaEdit } from 'react-icons/fa';
import "../../assets/scss/links.scss";

const CustomLink = ({children, linkType, className, to, ...props}) => {

    const fnLink = (linkType) => {
        switch(linkType) {
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
                return {
                    class: 'link-view inline-flex items-center',
                    icon: <FaLongArrowAltRight className="mx-2 text-sm" />
                };                
        }
    }

    console.log(fnLink(linkType));
    return ( 
        <Link to={to || ""} className={`${fnLink(linkType).class} ${className || ""}`}>  {children} {fnLink(linkType).icon} </Link>
     );
}
 
export default CustomLink;