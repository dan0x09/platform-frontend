import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './authentication/AuthProvider';
import { ProtectedRoute } from './authentication/ProtectedRoute';
import Login from './routes/Login';
import { Role } from './types/interfaces';
import Farmer from './routes/Farmer';
import Silos from './routes/Silos';
import Contractor from './routes/Contractor';
import Systems from './routes/Systems';
import SilageHeaps from './routes/SilageHeaps';
import Admin from './routes/Admin';
import Signup from './routes/Signup';

function App() {
  document.querySelector('html')?.setAttribute('data-theme', 'light');

  return (
    <AuthProvider>
      {/*       <Navigation /> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN, Role.OWNER]}>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="silos" element={<Silos />} />
        </Route>
        <Route
          path="farmer"
          element={
            <ProtectedRoute allowedRoles={[Role.FARMER]}>
              <Farmer />
            </ProtectedRoute>
          }
        >
          <Route path="silos" element={<Silos />} />
        </Route>
        <Route
          path="contractor"
          element={
            <ProtectedRoute allowedRoles={[Role.CONTRACTOR]}>
              <Contractor />
            </ProtectedRoute>
          }
        >
          <Route path="systems" element={<Systems />} />
          <Route path="silage-heaps" element={<SilageHeaps />} />
        </Route>
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
