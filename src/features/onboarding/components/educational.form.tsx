import { Input } from '@/components/ui/input';
import { FormWrapper } from './form.wrapper';

export const EducationalForm = () => {
  return (
    <FormWrapper title="Tell us about ur education">
      <Input placeholder="Educational Background" />
      <Input placeholder="Major" />
    </FormWrapper>
  );
};
