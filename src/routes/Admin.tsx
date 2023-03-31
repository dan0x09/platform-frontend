import { useAuth } from '../authentication/AuthProvider';
import Invite from './Invite';

export default function Admin(args: any) {
  const { token } = useAuth();

  return (
    <Invite/>
  );
}