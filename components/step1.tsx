import { NativeSelect, Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { RefObject } from "react";
import FloatingLabelInput from "./floatinginput";

import { Fields } from "./stepslider";

interface Props {
  form: UseFormReturnType<Fields>;
  religionElRef: RefObject<HTMLSelectElement>;
  casteElRef: RefObject<HTMLSelectElement>;
}

export default function Partone({ form, religionElRef, casteElRef }: Props) {
  return (
    <>
      <Group position="center" spacing="xl" grow>
        <FloatingLabelInput
          label="First Name"
          required
          {...form.getInputProps("firstName")}
        />
        <FloatingLabelInput
          label={`Middle name (Husband's Name)`}
          required="true"
          {...form.getInputProps("middleName")}
        />
        <FloatingLabelInput
          label="Last Name (Surname)"
          required
          {...form.getInputProps("lastName")}
        />
      </Group>
      <Group position="center" spacing="xl" grow>
        <FloatingLabelInput
          label={`Father's Name`}
          required
          {...form.getInputProps("fatherName")}
        />
      </Group>
      <Group position="center" spacing="xl" grow>
        <NativeSelect
          data={["Select One", "Hindu", "Muslim", "Parsi", "Sikh", "Other"]}
          description="Select Your Religion"
          radius="md"
          size="md"
          ref={religionElRef}
        />
        <NativeSelect
          data={["Select One", "O.B.C.", "S.T", "S.C.", "General", "Other"]}
          description="Select Your Caste"
          radius="md"
          size="md"
          ref={casteElRef}
        />
      </Group>
      <Group position="center" spacing="xl" grow>
        <DatePicker
          placeholder="Pick date"
          label="Birth Date"
          withAsterisk
          {...form.getInputProps("dob")}
        />
        <FloatingLabelInput
          label="Adhaar Card No."
          required
          {...form.getInputProps("aadhar")}
        />
      </Group>
      <Group position="center" spacing="xl" grow>
        <FloatingLabelInput
          label="Address"
          required
          {...form.getInputProps("address")}
        />
      </Group>
    </>
  );
}
