import { Button } from '@/components/ui/button';
import { StepBack } from 'lucide-react';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { EducationalForm } from './educational.form';
import { FundingForm } from './funding.form';
import { FormEvent, useState } from 'react';

type FormData = {
  jenjang: string;
  jurusan: string;
  tipePendanaan: string;
  preference: string;
};

const INITIAL_DATA: FormData = {
  jenjang: '',
  jurusan: '',
  tipePendanaan: '',
  preference: '',
};

export const Onboarding = () => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultiStepForm([<EducationalForm {...data} updateFields={updateFields} />, <FundingForm {...data} updateFields={updateFields} />]);
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();

    // Tampilkan semua data dalam alert
    alert(`Submitted with data:
    Jenjang: ${data.jenjang}
    Jurusan: ${data.jurusan}
    Tipe Pendanaan: ${data.tipePendanaan}
    Preference: ${data.preference}`);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="h-screen w-full font-poppins">
        <div className="absolute flex h-full w-2/4 justify-start">
          <div className="relative w-full">
            <img className="absolute left-0 top-0 h-full w-full rounded-lg object-cover" src="/images/onboarding.jpg" alt="College Image" />
          </div>
        </div>
        <div className="flex h-full justify-end">
          <div className="flex h-full w-2/4 items-center justify-center">
            <div className="w-[300px] space-y-4">
              <div className="flex justify-end">
                <p className="font-bold">
                  {currentStepIndex + 1}/{steps.length}
                </p>
              </div>
              {step}
              <div className="space-y-2">
                <Button type="submit" className="flex w-full justify-center">
                  {isLastStep ? 'Submit' : 'Next'}
                </Button>
                {!isFirstStep && (
                  <Button type="button" onClick={back} startContent={<StepBack />} variant="outline" className="flex w-full justify-center">
                    Back
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
