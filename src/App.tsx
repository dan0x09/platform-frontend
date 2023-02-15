import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './authentication/AuthProvider';
import { ProtectedRoute } from './authentication/ProtectedRoute';
import Login from './routes/Login';
import SilageHeaps from './routes/SilageHeaps';
import { Role } from './types/interfaces';

function App() {
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

        {/*         <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
