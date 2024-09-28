import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { tv } from 'tailwind-variants';
import { Check } from 'lucide-react';

interface ICheckbox {
    label: string,

}
// belum jadi
export const Checkbox = ({label}: ICheckbox) => {
  return (
    <div className='flex items-center gap-1'>
    <RadixCheckbox.Root className="size-5 flex items-center justify-center bg-red-300 p-2 border rounded-md" defaultChecked id="c1">
      <RadixCheckbox.Indicator className="">
        <Check size={10}/>
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
    <label htmlFor="c1">
      {label}
    </label>
  </div>

  );
};
