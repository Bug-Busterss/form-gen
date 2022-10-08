import { TextInput } from '@mantine/core';

interface Props {
  label: string;
  required?: boolean;
}

export default function FloatingLabelInput({
  label,
  required,
  ...formProps
}: Props & any) {
  return (
    <TextInput
      label={label}
      placeholder={label}
      required={required}
      size='md'
      mt='xl'
      autoComplete='nope'
      {...formProps}
    />
  );
}
