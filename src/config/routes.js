import LayoutApp from '../layouts/LayoutApp'
import LayoutLogin from '../layouts/LayoutLogin'
import LayoutEmpty from '../layouts/LayoutEmpty'
import Login from '../pages/auth/Login'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Tarea from '../pages/Tareas'
import SomosDevarana from '../pages/SomosDevarana'


// Usuarios
import RegistrarUsuarios from '../pages/Usuarios/create'
import IndexUsuarios from '../pages/Usuarios'
import LoginSuccess from '../pages/auth/LoginSuccess'
import LoginError from '../pages/auth/LoginError'


import Areas from '../pages/Usuarios/Areas'
import CreateAreas from '../pages/Usuarios/Areas/create'
import EditArea from '../pages/Usuarios/Areas/edit'

import Departamentos from '../pages/Usuarios/Departamentos'
import CreateDepartamentos from '../pages/Usuarios/Departamentos/create'
import EditDepartamentos from '../pages/Usuarios/Departamentos/edit'

import Puestos from '../pages/Usuarios/Puestos'
import EditPuestos from '../pages/Usuarios/Puestos/edit'
import CreatePuestos from '../pages/Usuarios/Puestos/create'

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

    // Usuarios

    {
        path: "/usuarios/registrar",
        layout: LayoutApp,
        component: RegistrarUsuarios
    },
    {
        path: "/usuarios",
        layout: LayoutApp,
        component: IndexUsuarios
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
        component: CreateAreas
    },
    {
        path: "/departamentos",
        layout: LayoutApp,
        component: Departamentos
    },
    {
        path: "/departamentos/:id",
        layout: LayoutApp,
        component: EditDepartamentos
    },
    {
        path: "/departamentos/registrar",
        layout: LayoutApp,
        component: CreateDepartamentos
    },
    {
        path: "/puestos",
        layout: LayoutApp,
        component: Puestos
    },
    {
        path: "/puestos/:id",
        layout: LayoutApp,
        component: EditPuestos
    },
    {
        path: "/puestos/registrar",
        layout: LayoutApp,
        component: CreatePuestos
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