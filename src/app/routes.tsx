import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Propmtpage } from '@/features/prompt-page/components';
import { Dashboard } from '@/features/dashboard/components';
import { DashboardBeasiswa } from '@/features/dashboard-beasiswa/components';
import { FormAddBeasiswa } from '../features/dashboard-beasiswa/components/form.add-beasiswa';

export const AppRouter = () => {
  return (  
    <BrowserRouter>
      <Routes>
       <Route path='/prompt' element={<Propmtpage/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/dashboard/scholarship' element={<DashboardBeasiswa/>}></Route>
       <Route path='/dashboard/scholarship/tambah' element={<FormAddBeasiswa/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
