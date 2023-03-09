import { useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useAuth } from '../authentication/AuthProvider';
import { Credentials, Role } from '../types/interfaces';

export default function Login() {
  const { token, userTokenPayload } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token && userTokenPayload) {
      if (userTokenPayload.role === Role.FARMER) {
        navigate('/farmer/silos');
      } else if (userTokenPayload.role === Role.CONTRACTOR) {
        navigate('/contractor/farms');
      } else if (userTokenPayload.role === Role.ADMIN || userTokenPayload.role === Role.OWNER) {
        navigate('/admin');
      }
    }
  });

  return (
    <div className="login-wrapper h-screen flex flex-col justify-center items-center">
      <img src="svg/silage-control-logo.svg" className="w-36 mb-6" />
      <div className="flex flex-col items-center w-80 pt-5 pb-4 shadow-xl rounded-lg bg-white">
        <h1 className="mb-4">Anmeldung</h1>
        <Form method="post" className="flex flex-col items-center">
          <label className="mb-4">
            <p>E-Mail-Adresse</p>
            <input name="email" className="input input-bordered" type="text" />
          </label>
          <label className="mb-6">
            <p>Passwort</p>
            <input name="password" className="input input-bordered" type="password" />
          </label>
          <button className="btn btn-primary mb-6 w-full" type="submit">
            Einloggen
          </button>
        </Form>
      </div>
    </div>
  );
}

export const action =
  ({ login }: { login: (credentials: Credentials) => Promise<void> }) =>
  async ({ request, params }: { request: any; params: any }) => {
    const formData = await request.formData();

    // call login, and redirect upon success

    return login({ email: formData.get('email'), password: formData.get('password') });
  };
