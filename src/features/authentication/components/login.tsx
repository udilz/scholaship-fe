import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    mutate: handleSubmitLogin,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: () => loginUser({ email, password }),
    onSuccess: () => navigate('/dashboard'),
  });

  async function handleContinueWithGoogle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch('http://localhost:8000/api/auth/continue-with-google', {
      method: 'POST',
    });
  }

  return (
    <main className="font-poppins h-full w-full">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="absolute flex h-full w-2/4 justify-start">
        <div className="relative w-full">
          <img className="absolute left-0 top-0 h-full w-full object-cover" src="/images/college.jpg" alt="College Image" />
        </div>
      </div>

      <div className="flex h-full justify-end">
        <div className="flex h-full w-2/4 items-center justify-center">
          <div className="w-[300px] space-y-4">
            <section>
              <h3 className="text-xl font-bold">Log In</h3>
              <p className="text-sm">Welcome back, please log in to continue</p>
            </section>
            <div className="space-y-2">
              <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              <Button disabled={isPending} onClick={() => handleSubmitLogin()} className="flex w-full justify-center">
                Log In
              </Button>
              <form action="http://localhost:8000/api/auth/continue-with-google" method="POST">
                <Button variant="outline" className="flex w-full justify-center">
                  <div className="flex items-center gap-2">
                    <img src="/images/google.png" alt="" width={15} height={15} />
                    Continue with Google
                  </div>
                </Button>
              </form>
              {isError && <div className="text-center text-sm font-medium text-rose-600">{error?.message}</div>}
            </div>
            <div className="text-sm">
              Don't have an account?{' '}
              <Link className="font-semibold text-blue-600" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
