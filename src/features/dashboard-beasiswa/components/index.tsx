import { LayoutDashboard } from '@/features/dashboard/components/layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const DashboardBeasiswa = () => {
  return (
    <LayoutDashboard>
      <main className='w-full'>
        <section className="flex items-center justify-between sticky top-0 z-[2] py-4 bg-white">
          <div>
            <h3 className="text-xl">Data beasiswa</h3>
          </div>
          <Link to="/dashboard/scholarship/tambah">
            <Button variant="violet">Tambah Beasiswa</Button>
          </Link>
        </section>
        <section className="mt-4"> 
          <div className="relative overflow-x-auto">
            <table className="text-left text-sm text-gray-500 ">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                <tr>
                <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nama
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Link Beasiswa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Negara
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tipe pendanaan beasiswa
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Jurusan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Open date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Close date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Diskiripsi
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white">
                <td className="px-6 py-4">1</td>
                  <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                    Devsacle
                  </th>
                  <td className="px-6 py-4">
                    <a href="#" className='text-blue-600'>HTTP</a>
                  </td>
                  <td className="px-6 py-4">Indonesia</td>
                  <td className="px-6 py-4">Beasiswa penuh</td>
                  <td className="px-6 py-4">infomatika</td>
                  <td className="px-6 py-4">2 september 2024</td>
                  <td className="px-6 py-4">2 september 2024</td>
                  <td className="px-6 py-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, tempore commodi in rem earum corrupti quis quaerat maxime culpa vel alias aliquid necessitatibus architecto. Fugiat voluptatem sint ipsam tenetur commodi.</td>
                  <td className="px-6 py-4 space-x-4">
                    <a href="#" className='text-red-500'>delete</a>
                    <a href="#" className='text-blue-600'>edit</a>
                  </td>
                </tr>            
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </LayoutDashboard>
  );
};
