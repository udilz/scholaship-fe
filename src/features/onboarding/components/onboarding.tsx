import { Button } from '@/components/ui/button';
import { StepBack } from 'lucide-react';
import { useMultiStepForm } from '../hooks/useMultiStepForm';
import { EducationalForm } from './educational.form';
import { FundingForm } from './funding.form';

export const Onboarding = () => {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultiStepForm([<EducationalForm />, <FundingForm />]);
  return (
    <main className="h-screen w-full font-poppins">
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
              <Button type="button" onClick={next} className="flex w-full justify-center">
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
    </main>
  );
};
