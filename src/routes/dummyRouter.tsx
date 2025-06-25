import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
// import Settings from '../pages/Settings';
// import ErrorPage from '../pages/ErrorPage';

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const router = createBrowserRouter([
  {
    path: '/',
    // element: isAuthenticated() ? <Navigate to="/dashboard" /> : <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: '/',
    // element: isAuthenticated() ? <MainLayout /> : <Navigate to="/" />,
    children: [
      {
        path: 'dashboard',
        // element: <Dashboard />,
        loader: async () => {
          // Simulate auth validation or prefetch dashboard data
          return null;
        },
        // errorElement: <ErrorPage />,
      },
      {
        path: 'settings',
        // element: <Settings />,
      },
    ],
  },
  {
    path: '*',
    // element: <ErrorPage />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
