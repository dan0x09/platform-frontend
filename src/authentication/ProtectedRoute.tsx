import { Navigate } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { Role } from '../types/interfaces';

const DEFAULT_PATH = '/login';

type Props = {
  children?: React.ReactNode;
  allowedRoles: Role[];
  redirectPath?: string;
};
export function ProtectedRoute({ children, allowedRoles, redirectPath = DEFAULT_PATH }: Props) {
  const { token, userTokenPayload } = useAuth();

  if (!token || !userTokenPayload || !allowedRoles.includes(userTokenPayload.role)) {
    console.log(token, userTokenPayload);
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Fragment>{children}</Fragment>;
}
