const Avatar = ({picture, userName, ...props}) => {
    return ( 
        <>
            {picture ? 
                <img src={picture} alt={userName} className={`w-20 rounded-full shadow ${props.className ?? props.className}`} />
            :
                <div className={`bg-gradient-to-tr from-gray-600 to-gray-400 rounded-full -mx-1 ${props.className ?? props.className}`}></div>
            }
        </>
     );
}
 
export default Avatar;