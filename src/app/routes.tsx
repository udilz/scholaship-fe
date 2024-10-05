import { Onboarding } from '@/features/onboarding/components/onboarding';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};
