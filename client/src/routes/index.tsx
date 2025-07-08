import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ToDo from "../pages/ToDo/ToDo"
import Home from "../pages/Home"
import Components from "../pages/Components";
import Validinput from "../components/newComponent";


// const isAuthenticated=()=>{
//     // return localStorage.getItem('token');
//     return true;
// }

const router=createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/todo',
                element:<ToDo />
            },
            {
                path:'/components',
                element:<Components/>
            },
            {
                path:'/input',
                element:<Validinput/>
            }
        ],
        
        // React.createElement(App)
    },
    
    // {
    //     path:'/',
    //     element: isAuthenticated()? <Navigate to="/dashboard"/>:<Login/>,
    //     errorElement:<ErrorPage/>
    // }
    // {
    //     path:'/',
    //     element: isAuthenticated() ? <MainLayout /> : <Navigate to ="/" />,
    //     children:[

    //     ]
    // }
])

export default function AppRouter(){
    return <RouterProvider router={router}/>
}