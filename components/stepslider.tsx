import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import Partone from "./step1";
import { Parttwo } from "./step2";

export default function Stepslider() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint='sm'>
        <Stepper.Step
          label='First step'
          description='Create an account'
          allowStepSelect={active > 0}>
          Step 1 content: Add Your Details
          <Partone />
        </Stepper.Step>
        <Stepper.Step
          label='Second step'
          description='Upload Documents'
          allowStepSelect={active > 1}>
          Step 2 content: Upload Documents
          <Parttwo />
        </Stepper.Step>
        <Stepper.Step
          label='Final step'
          description='Get full access'
          allowStepSelect={active > 2}>
          Step 3 content: Payment Method
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position='center' mt='xl'>
        <Button variant='default' onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
