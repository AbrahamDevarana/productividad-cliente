const Badge = (props) => {
    return ( 
    <div className={`p-4 rounded-md shadow w-16 h-16 ${ props.className ?? props.className }`}>
        <div className="text-white w-full text-3xl">
            { props.children }
        </div>
    </div> );
}
 
export default Badge;