import { LayoutDashboard } from '@/features/dashboard/components/layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { countries, jenjangBeasiswa, pendanaanBeasiswa, majorIndonesia } from '../../../data/scholarshipData';
import { InputDate } from './inputDate';
import React from 'react';

export const FormAddBeasiswa = () => {
  return (
    <LayoutDashboard isCentered>
      <main>
        <section className="space-y-4">
          <h3>Tambah Beasiswa</h3>
          <section className="space-y-3">
            <Input placeholder="Nama " className='placeholder:text-black' />
            <Input placeholder="Link beasiswa" className='placeholder:text-black' />
            <Select caption="Negara" options={countries}></Select>
            <Select caption="Tipe pendanaan beasiswa" options={pendanaanBeasiswa}></Select>
            <Select caption="jenjang beasiswa" options={jenjangBeasiswa} className="w-3/5"></Select>
            <Select caption="Jurusan" options={majorIndonesia} className="w-3/5"></Select>
            <InputDate label='Open Date'/>
            <InputDate label='Close Date'/>           
            <Textarea placeholder="Diskripsi beasiswa" className='placeholder:text-black' rows={6} />
            <Button variant="violet">Submit Product</Button>
          </section>
        </section>
      </main>
    </LayoutDashboard>
  );
};
