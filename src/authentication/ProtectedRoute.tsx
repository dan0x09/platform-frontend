import { Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import { useAuth } from './AuthProvider';

type Props = {
  children?: React.ReactNode;
};
export function ProtectedRoute(props: Props) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <Fragment>{props.children}</Fragment>;
}
