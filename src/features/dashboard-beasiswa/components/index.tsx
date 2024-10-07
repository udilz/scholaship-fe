import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScholarshipTable } from './scholarship.table';
import { IDataScholarship } from '../types/scholarship.types';
import { useEffect, useState } from 'react';
import { getBeasiswa, deleteBeasiswa } from '../services/dashboard.api';

export const DashboardBeasiswa = () => {
  const [data, setData] = useState<IDataScholarship[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await getBeasiswa();
        console.log(getData);
        setData(getData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = confirm('Are you sure you want to delete this scholarship?');
    if (confirmed) {
      try {
        await deleteBeasiswa(id);
        setData(data.filter((scholarship) => scholarship._id !== id));
      } catch (error) {
        console.error('Error deleting scholarship:', error);
      }
    }
  };

  return (
    <main className="w-full">
      <section className="sticky top-0 z-[2] flex items-center justify-between bg-white py-4">
        <div>
          <h3 className="text-xl">Data beasiswa</h3>
        </div>
        <Link to="/dashboard/scholarship/create">
          <Button>Tambah Beasiswa</Button>
        </Link>
      </section>
      <section className="mt-4">
        <ScholarshipTable scholarships={data} onDelete={handleDelete}></ScholarshipTable>
      </section>
    </main>
  );
};
