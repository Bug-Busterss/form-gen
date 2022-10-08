import { useRef, useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import Partone from "./step1";
import { Parttwo } from "./step2";
import { useForm } from "@mantine/form";

export interface Fields {
  firstName: string;
  middleName: string;
  lastName: string;
  fatherName: string;
  dob: Date;
  aadhar: string;
  address: string;
}

// const AADHAR_REGEX = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/g;

export default function Stepslider() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const religionElRef = useRef<HTMLSelectElement>(null);
  const casteElRef = useRef<HTMLSelectElement>(null);
  const form = useForm<Fields>({
    validate: {
      // aadhar: (val) =>
      //   AADHAR_REGEX.test(val) ? null : "Enter valid aadhar number",
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(async (formData) => {
        console.log({ formData });
      })}
    >
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={active > 0}
        >
          Step 1 content: Add Your Details
          <Partone
            form={form}
            religionElRef={religionElRef}
            casteElRef={casteElRef}
          />
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Upload Documents"
          allowStepSelect={active > 1}
        >
          Step 2 content: Upload Documents
          <Parttwo />
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 2}
        >
          Step 3 content: Payment Method
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button type="submit" onClick={nextStep}>
          Next step
        </Button>
      </Group>
    </form>
  );
}
