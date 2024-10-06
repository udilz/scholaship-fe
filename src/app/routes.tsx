import { Onboarding } from '@/features/onboarding/components/onboarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@/features/authentication/components/login';
import { Register } from '@/features/authentication/components/register';
import { AuthLayout } from '@/features/authentication/components/layouth.auth';

import { Propmtpage } from '@/features/prompt-page/components';

export const AppRouter = () => {
  return (  
    <BrowserRouter>
      <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/prompt" element={<Propmtpage />} />
      </Routes>
    </BrowserRouter>
  );
};