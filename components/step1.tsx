import { NativeSelect, Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import FloatingLabelInput from './floatinginput';
import { useForm } from '@mantine/form';
import { useRef } from 'react';

interface Fields {
  firstName: string;
  middleName: string;
  lastName: string;
  fatherName: string;
  bod: string;
  aadhar: string;
  address: string;
}

export default function Partone() {
  const religionElRef = useRef<HTMLSelectElement>(null);
  const casteElRef = useRef<HTMLSelectElement>(null);
  const form = useForm<Fields>({
    validate: {
      aadhar: val =>
        val.match(/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/g) === null
          ? 'Enter valid aadhar number'
          : null,
    },
  });
  return (
    <form
      onSubmit={form.onSubmit(async formData => {
        console.log({ formData });
      })}
    >
      <Group position='center' spacing='xl' grow>
        <FloatingLabelInput
          label='First Name'
          required
          {...form.getInputProps('firstName')}
        />
        <FloatingLabelInput
          label={`Middle name (Husband's Name)`}
          required='true'
          {...form.getInputProps('middleName')}
        />
        <FloatingLabelInput
          label='Last Name (Surname)'
          required
          {...form.getInputProps('lastName')}
        />
      </Group>
      <Group position='center' spacing='xl' grow>
        <FloatingLabelInput
          label={`Father's Name`}
          required
          {...form.getInputProps('fatherName')}
        />
      </Group>
      <Group position='center' spacing='xl' grow>
        <NativeSelect
          data={['Select One', 'Hindu', 'Muslim', 'Parsi', 'Sikh', 'Other']}
          description='Select Your Religion'
          radius='md'
          size='md'
          ref={religionElRef}
        />
        <NativeSelect
          data={['Select One', 'O.B.C.', 'S.T', 'S.C.', 'General', 'Other']}
          description='Select Your Caste'
          radius='md'
          size='md'
          ref={casteElRef}
        />
      </Group>
      <Group position='center' spacing='xl' grow>
        <DatePicker placeholder='Pick date' label='Birth Date' withAsterisk />
        <FloatingLabelInput label='Adhaar Card No.' required />
      </Group>
      <Group position='center' spacing='xl' grow>
        <FloatingLabelInput label='Address' required />
      </Group>
    </form>
  );
}
