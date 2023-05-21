import './index.css';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { useAuth } from './authentication/AuthProvider';
import { ProtectedRoute } from './authentication/ProtectedRoute';
import Login, { action as loginAction } from './routes/Login';
import { Role } from './types/interfaces';
import Farmer from './routes/Farmer';
import Silos from './routes/Silos';
import Contractor from './routes/Contractor';
import Systems from './routes/Systems';
import SilageHeaps from './routes/SilageHeaps';
import Admin from './routes/Admin';
import Signup from './routes/Signup';
import SilageHeapDetails from './routes/SilageHeapDetails';
import Farms from './routes/Farms';
import Footer from './shared/Footer';
import Imprint from './shared/Imprint';
import Privacy from './shared/Privacy';
import Invite from './routes/Invite';
import SystemDetails from './routes/SystemDetails';
import SystemCreation from './routes/SystemCreation';
import Contractors from './routes/Contractors';
import ContractorCreation from './routes/ContractorCreation';

export default function App() {
  document.querySelector('html')?.setAttribute('data-theme', 'light');
  const { onLogin } = useAuth();

  const routes = [
    {
      element: (
        <>
          <Outlet />
          <Footer />
        </>
      ),
      children: [
        {
          path: 'login',
          element: <Login />,
          action: loginAction({ login: onLogin }),
        },
        {
          path: 'admin',
          element: (
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.OWNER]}>
              <Admin />
            </ProtectedRoute>
          ),
          children: [
            { path: 'farms', element: <Farms /> },
            {
              path: 'systems',
              children: [
                { index: true, element: <Systems /> },
                { path: ':systemId', element: <SystemDetails /> },
                { path: 'create', element: <SystemCreation /> },
              ],
            },
            {
              path: 'silage-heaps',
              children: [
                { index: true, element: <SilageHeaps /> },
                { path: ':silageHeapId', element: <SilageHeapDetails /> },
              ],
            },
            {
              path: 'contractors',
              children: [
                { index: true, element: <Contractors /> },
                { path: ':contractorId', element: <span>ContractorDetails</span> },
                { path: 'create', element: <ContractorCreation /> },
              ],
            },
            { path: 'invite', element: <Invite /> },
          ],
        },
        {
          path: 'farmer',
          element: (
            <ProtectedRoute allowedRoles={[Role.FARMER]}>
              <Farmer />
            </ProtectedRoute>
          ),
          children: [{ path: 'silos', element: <Silos /> }],
        },
        {
          path: 'contractor',
          element: (
            <ProtectedRoute allowedRoles={[Role.CONTRACTOR]}>
              <Contractor />
            </ProtectedRoute>
          ),
          children: [
            { path: 'farms', element: <Farms /> },
            {
              path: 'silage-heaps',
              children: [
                { index: true, element: <SilageHeaps /> },
                { path: ':silageHeapId', element: <SilageHeapDetails /> },
              ],
            },
          ],
        },
        {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'imprint',
          element: <Imprint />,
        },
        {
          path: 'privacy',
          element: <Privacy />,
        },
        {
          path: '/',
          element: <Navigate to="/login" replace />,
        },
        {
          path: '*',
          element: <Navigate to="/login" replace />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <div className="min-h-full max-h-full flex flex-col items-stretch bg-gray-50">
      <RouterProvider router={router} />
    </div>
  );
}
