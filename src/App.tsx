import './index.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './authentication/AuthProvider';
import { ProtectedRoute } from './authentication/ProtectedRoute';
import Login from './routes/Login';
import SilageHeaps from './routes/SilageHeaps';
import { Role } from './types/interfaces';

function App() {
  document.querySelector('html')?.setAttribute('data-theme', 'light');

  return (
    <AuthProvider>
      {/*       <Navigation /> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="silageheaps"
          element={
            <ProtectedRoute allowedRoles={[Role.ADMIN]}>
              <SilageHeaps />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
