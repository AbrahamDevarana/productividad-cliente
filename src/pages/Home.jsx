import { useEffect, useState } from "react";

const Home = () => {


    const [windowWidth, setWindowWidth] = useState([
        { order: "1", width: "6/12", content:'panel 1'},
        { order: "3", width: "1/12", content:'panel 3'},
        { order: "2", width: "3/12", content:'panel 2'},
        { order: "5", width: "1/12", content:'panel 5'},
        { order: "4", width: "4/12", content:'panel 4'}
    ])

    useEffect( () => {
        sortPanel()
        // eslint-disable-next-line
    }, [])
    
    const sortPanel = () => {
        setWindowWidth( windowWidth.sort( ( a, b ) =>  a.width - b.width ) )
    }
    

    

    return ( 
    <>
    <div className="hidden w-1/12 w-2/12 w-3/12 w-4/12 w-5/12 w-6/12 w-7/12 w-8/12 w-9/12 w-10/12 w-11/12 w-12/12"></div>
        <div className="shadow rounded bg-white p-4">
            <h1>Panel</h1>
        </div>

        <div className="py-5">

            <div className="flex flex-1 flex-wrap gap-3">
                { windowWidth.map( item => (
                    
                    <div className={`resize-x shadow rounded bg-white p-4 w-${item.width} order-${item.order} `}>
                        {item.content}
                    </div>
                    
                )) }
            
            </div>
        </div>
    </>
     );
}
 
export default Home;

