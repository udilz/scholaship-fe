import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Propmtpage } from '@/features/prompt-page/components';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/prompt' element={<Propmtpage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
