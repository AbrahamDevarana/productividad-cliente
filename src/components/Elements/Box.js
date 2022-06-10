const Box = (props) => {
    return ( 
        <div id={props.id} className={`p-5 shadow bg-white rounded-ext ${props.className ? props.className : ""}` }>
            {props.children}
        </div>
     );
}
 
export default Box;