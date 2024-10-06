import { Input } from '@/components/ui/input';
import { FormWrapper } from './form.wrapper';


export const FundingForm = () => {
  return (
    <FormWrapper title="Tell us about ur needs">
      <Input placeholder="Funding Need" />
      <Input placeholder="Preference" />
    </FormWrapper>
  );
};
