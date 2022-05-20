import LayoutApp from '../layouts/LayoutApp'
import LayoutLogin from '../layouts/LayoutLogin'
import Login from '../pages/auth/Login'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Tarea from '../pages/Tareas'

const routesAccess = [
    {
        path: "/login",
        layout: LayoutLogin,
        component: Login,
    },
    {
        path: "*",
        layout: LayoutApp,
        component: Error404,
    },
]

const routesAdmin = [
    {
        path: "/",
        layout: LayoutApp,
        component: Home
    },
    {
        path: "/tareas",
        layout: LayoutApp,
        component: Tarea
    } 
]

const routes = [...routesAdmin, ...routesAccess]


export default routes