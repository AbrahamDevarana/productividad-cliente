import '../../assets/css/Input.css'

const Input = ({title, inputName, className, fn, value, disabled, fnValidate, type="text", id}) => {
    return ( 
        <div className="group-inpt">
            <input id={id} disabled={disabled || false} required name={inputName} value={value} type={type} className={`input ${className?? className}`} onChange={fn} onBlur={fnValidate? handleValidate : null}/>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className='label'>{title}</label>
        </div>
     );
}

const handleValidate = (e) => {
        
    if(e.target.value.trim() === ''){
        e.target.classList.add('inptError');
    }else{
        e.target.classList.remove('inptError');

    }
}
 
export default Input;