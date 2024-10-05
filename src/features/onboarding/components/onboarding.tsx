import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { StepBack } from 'lucide-react';

export const Onboarding = () => {
  return (
    <main className="font-poppins h-screen w-full">
      <div className="absolute flex h-full w-2/4 justify-start">
        <div className="relative w-full">
          <img className="absolute left-0 top-0 h-full w-full rounded-lg object-cover" src="/images/onboarding.jpg" alt="College Image" />
        </div>
      </div>
      <div className="flex h-full justify-end">
        <div className="flex h-full w-2/4 items-center justify-center">
          <div className="w-[300px] space-y-4">
            <div>
              <h1>Tell us about ur needs</h1>
            </div>
            <div className="space-y-4">
              <Input placeholder="Educational Background" />
              <Input placeholder="Major" />
              <Input placeholder="Funding Need" />
              <Input placeholder="Preference" />
              <Button className="flex w-full justify-center">Submit</Button>
              <Button startContent={<StepBack />} variant='outline' className="flex w-full justify-center">Back</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
