import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './authentication/AuthProvider';
import { Dashboard } from './routes/Dashboard';
import { ProtectedRoute } from './authentication/ProtectedRoute';
import Login from './routes/Login';

function App() {
  return (
    <AuthProvider>
      {/*       <Navigation /> */}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/*         <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
