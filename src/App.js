import {
    createBrowserRouter
} from 'react-router-dom'

const App =()=>{
    return(
        <div>
            This is Header Element
        </div>
    )
}


const approuter =createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
])
export {approuter}