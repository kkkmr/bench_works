import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layout/MainLayout";
import ToDo from "../pages/ToDo";
import Components from "../pages/Components";
// import Select from "../components/Select";


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
                path:'/todo',
                element:<ToDo/>
            },
            {
                path:'/components',
                element:<Components/>
            }
        ]
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