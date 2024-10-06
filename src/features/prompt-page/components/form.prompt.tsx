import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { countries, jenjangBeasiswa, pendanaanBeasiswa, majorIndonesia } from '../../../data/scholarshipData';
import { Card } from './card';
  
export const PropmtForm = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex h-3/4 w-3/4 rounded-md border shadow-md">
        <section className="flex w-5/12 flex-col justify-between border-r-2 p-5">
          <div className="space-y-4">
            <Select caption="negara" options={countries}></Select>
            <Select caption="Tipe pendanaan beasiswa" options={pendanaanBeasiswa}></Select>
            <Select caption="jenjang beasiswa" options={jenjangBeasiswa} className="w-3/5"></Select>
            <Select caption='Jurusan' options={majorIndonesia} className="w-3/5"></Select>
          </div>
          <div>
            <Button className="flex w-full justify-center" variant='violet'>Submit</Button>
          </div>
        </section>
        <section className="flex-1 space-y-3 overflow-hidden overflow-y-auto p-5">
          <Card title='Devsclae' description='loremm' link='http' openDate='2 september 2024' closeDate='2 september 2024'></Card>
        </section>
      </div>
    </div>
  );
};
