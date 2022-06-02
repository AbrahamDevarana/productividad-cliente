import '../../assets/css/Input.css'

const Input = ({title, inputName, className, fn, value, disabled }) => {
    return ( 
        <div className="group">
            <input disabled={disabled ?? false} required name={inputName} value={value} type="text" className={`input ${className?? className}`} onChange={fn} />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className='label'>{title}</label>
        </div>
     );
}
 
export default Input;