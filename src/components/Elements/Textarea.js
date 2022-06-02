import '../../assets/css/Input.css'
const Textarea = ({title, inputName, className, fn, value, disabled }) => {
    return ( 
        <div className="group">
            <textarea rows={5} disabled={disabled ?? false} required name={inputName} value={value} type="text" className={`input ${className?? className}`} onChange={fn}> </textarea>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label className='label'>{title}</label>
        </div>
     );
}
 
export default Textarea;