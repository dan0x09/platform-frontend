import { Navigate, useLocation } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import { useAuth } from './AuthProvider';
import { Role } from '../types/interfaces';
import { isExpired } from 'react-jwt';

const DEFAULT_PATH = '/login';

type Props = {
  children?: React.ReactNode;
  allowedRoles: Role[];
  redirectPath?: string;
};
export function ProtectedRoute({ children, allowedRoles, redirectPath = DEFAULT_PATH }: Props) {
  const { token, userTokenPayload, onLogout } = useAuth();
  const { pathname } = useLocation();

  useEffect(() => {
    if (token && isExpired(token)) {
      onLogout();
    }
  }, [pathname]);

  if (!token || !userTokenPayload || !allowedRoles.includes(userTokenPayload.role)) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Fragment>{children}</Fragment>;
}
