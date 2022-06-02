import LayoutApp from '../layouts/LayoutApp'
import LayoutLogin from '../layouts/LayoutLogin'
import Login from '../pages/auth/Login'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
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
    }, 
    {
        path: "/perfil",
        layout: LayoutApp,
        component: Perfil
    },
    {
        path: "/perfil/:userSlug",
        layout: LayoutApp,
        component: Perfil
    } 
]

const routes = [...routesAdmin, ...routesAccess]


export default routes