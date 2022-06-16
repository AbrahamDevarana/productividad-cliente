import LayoutApp from '../layouts/LayoutApp'
import LayoutLogin from '../layouts/LayoutLogin'
import LayoutEmpty from '../layouts/LayoutEmpty'
import Login from '../pages/auth/Login'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Tarea from '../pages/Tareas'
import SomosDevarana from '../pages/SomosDevarana'


// Colaboradores
import RegistrarColaboradores from '../pages/Colaboradores/create'
import IndexColaboradores from '../pages/Colaboradores'
import Areas from '../pages/Colaboradores/Areas'
import RegistrarArea from '../pages/Colaboradores/Areas/create'
import EditArea from '../pages/Colaboradores/Areas/edit'
import LoginSuccess from '../pages/auth/LoginSuccess'
import LoginError from '../pages/auth/LoginError'

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
    {
        path: "/success",
        layout: LayoutEmpty,
        component: LoginSuccess,
    },
    {
        path: "/error",
        layout: LayoutEmpty,
        component: LoginError,
    }
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
    },

    // Colaboradores

    {
        path: "/colaboradores/registrar",
        layout: LayoutApp,
        component: RegistrarColaboradores
    },
    {
        path: "/colaboradores",
        layout: LayoutApp,
        component: IndexColaboradores
    },
    {
        path: "/areas",
        layout: LayoutApp,
        component: Areas
    },
    {
        path: "/areas/:id",
        layout: LayoutApp,
        component: EditArea
    },
    {
        path: "/areas/registrar",
        layout: LayoutApp,
        component: RegistrarArea
    },

    // Devarana

    {
        path: "/somos-devarana",
        layout: LayoutApp,
        component: SomosDevarana
    },

    // Gestión

]

const routes = [...routesAdmin, ...routesAccess]


export default routes