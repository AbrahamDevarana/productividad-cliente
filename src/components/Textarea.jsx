import '../assets/css/Input.css'

const Textarea = ({ inputName, placeholder, classProp, ...props}) => {

    return ( 
        <div className="input-group">
            <textarea autoComplete="off" name={inputName} className="input" >
            </textarea>
            <label className="user-label">{placeholder}</label>
        </div>
     );
}
 
export default Textarea;