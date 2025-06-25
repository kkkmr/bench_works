import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
// import App from "../App";
import MainLayout from "../layout/MainLayout";


const isAuthenticated=()=>{
    // return localStorage.getItem('token');
    return true;
}
const router=createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />
        // React.createElement(App)
    }
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