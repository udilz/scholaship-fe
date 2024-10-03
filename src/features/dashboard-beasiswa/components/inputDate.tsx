import React from 'react';
import { Input } from '@/components/ui/input';

interface InputDateProps {
  label?: string;
}

export const InputDate = ( props : InputDateProps) => {
  return (
    <div className="flex items-center gap-4">
      <label htmlFor="openDate">
        {props.label}
        {':'}
      </label>
      <Input type="date" id="openDate"></Input>
    </div>
  );
};
