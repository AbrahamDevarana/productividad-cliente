import '../assets/css/Input.css'

const Input = ({ inputName, placeholder, classProp, ...props}) => {
    return ( 
        <div className="input-group">
            <input required="" type="text" name={inputName} autoComplete="off" className="input" />
            <label className="user-label">{placeholder}</label>
        </div>
     );
}
 
export default Input;