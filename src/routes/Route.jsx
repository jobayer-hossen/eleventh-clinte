import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Resister from "../pages/resister/Resister";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import AllToys from "../pages/alltoys/AllToys";
import AddToy from "../pages/AddToy";
import Details from "../pages/alltoys/Details";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/mytoys/MyToys";
import UpdateToy from "../pages/mytoys/UpdateToy";
import Notification from "./Notification";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/resister',
                element:<Resister/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/addToy',
                element:<AddToy/>
            },
            {
                path:'/allToys',
                element:<AllToys/>,
                loader:()=> fetch('https://eleventh-assignment-server-sooty.vercel.app/addToy')
            },
            {
                path:'/toy/:id',
                element: <Notification><PrivateRoute><Details/></PrivateRoute></Notification> ,
                loader: ({params}) => fetch(`https://eleventh-assignment-server-sooty.vercel.app/toy/${params.id}`)
            },
            {
                path:'/myToys',
                element:<MyToys/>
            },
            {
                path:'/updateToy/:id',
                element:<UpdateToy/>,
                loader: ({params}) => fetch(`https://eleventh-assignment-server-sooty.vercel.app/toy/${params.id}`)
            }

        ]
    }
]);
export default router;