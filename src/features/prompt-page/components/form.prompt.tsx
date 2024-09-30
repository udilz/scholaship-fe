import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Bookmark } from 'lucide-react';
import { countries, jenjangBeasiswa, pendanaanBeasiswa, majorIndonesia } from '../data/scholarshipData';
  
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
          <Card></Card>
        </section>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <section className="rounded-md border-2 px-3 py-2">
      <header className="flex items-center justify-between">
        <h2>Devscale</h2>
        <Button className="rounded-full" iconOnly variant='violet'>
          <Bookmark size={18} />
        </Button>
      </header>
      <section className="space-y-2">
        <p className="text-pretty text-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti porro repellendus reprehenderit accusamus? Corrupti sunt dolore minima nostrum ea dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, a.</p>
        <a href="#" className="text-blue-600">
          htttp
        </a>
        <p className="space-x-2 text-sm font-normal italic text-slate-500">
          <span>1 september 2024</span>
          <span>-</span>
          <span>1 september 2024</span>
        </p>
      </section>
    </section>
  );
};
