import { TextInputProps } from "@mantine/core";
import { FC, useState } from "react";

interface Props {
  input: FC<TextInputProps>;
  label: string;
}

export default function AuthInput({
  input: Input,
  label,
  ...formProps
}: Props & any) {
  const [focused, setFocused] = useState(false);
  return (
    <Input
      label={label}
      required
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      size="lg"
      {...formProps}
    />
  );
}
