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
          <section>
            <form action="" className="space-y-3">
              <Input placeholder="Nama Beasiswa" name="namaBeasiswa" className="placeholder:text-black" />
              <Input placeholder="Link beasiswa" name="linkBeasiswa" className="placeholder:text-black" />
              <Select caption="Negara" options={countries} name="negara"></Select>
              <Select caption="Tipe pendanaan beasiswa" options={pendanaanBeasiswa} name="tipePendanaanBeasiswa"></Select>
              <Select caption="jenjang beasiswa" options={jenjangBeasiswa} className="w-3/5" name="jenjangBeasiswa"></Select>
              <Select caption="Jurusan" options={majorIndonesia} className="w-3/5" name="majorIndonesia"></Select>
              <InputDate label="Open Date" name="openDate" />
              <InputDate label="Close Date" name="closeDate" />
              <Textarea placeholder="Diskripsi beasiswa" name="diskripsi" className="placeholder:text-black" rows={6} />
              <Button variant="violet">Submit Product</Button>
            </form>
          </section>
        </section>
      </main>
    </LayoutDashboard>
  );
};
