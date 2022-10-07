import { useState } from "react";
import { TextInput, createStyles, NativeSelect, Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import FloatingLabelInput from "./floatinginput";

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: "relative",
    },

    label: {
      position: "absolute",
      zIndex: 2,
      top: 7,
      left: theme.spacing.sm,
      pointerEvents: "none",
      color: floating
        ? theme.colorScheme === "dark"
          ? theme.white
          : theme.black
        : theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        "transform 150ms ease, color 150ms ease, font-size 150ms ease",
      transform: floating ? `translate(-${theme.spacing.sm}px, -28px)` : "none",
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
    },

    required: {
      transition: "opacity 150ms ease",
      opacity: floating ? 1 : 0,
    },

    input: {
      "&::placeholder": {
        transition: "color 150ms ease",
        color: !floating ? "transparent" : undefined,
      },
    },
  })
);

export default function Partone() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return (
    <div>
      <Group position='center' spacing='xl' grow>
        <FloatingLabelInput label='First Name' required='true' />
        <FloatingLabelInput label={`Husband's Name`} required='true' />
        <FloatingLabelInput label='Last Name ( Surname )' required='true' />
      </Group>
      <Group position='center' spacing='xl' grow>
        <FloatingLabelInput label={`Father's Name`} required='true' />
      </Group>
      <Group position='center' spacing='xl' grow>
        <NativeSelect
          data={["Hindu", "Muslim", "Parsi", "Sikh", "Other"]}
          // placeholder='Pick one'
          // label='Caste'
          description='Select Your Religion'
          radius='md'
          size='md'
          // withAsterisk
        />
        <NativeSelect
          data={["O.B.C.", "S.T", "S.C.", "General", "Other"]}
          // placeholder='Pick one'
          // label='Caste'
          description='Select Your Caste'
          radius='md'
          size='md'
          // withAsterisk
        />
      </Group>
      <Group position='center' spacing='xl' grow>
        <DatePicker placeholder='Pick date' label='Birth Date' withAsterisk />
        <FloatingLabelInput label='Adhaar Card No.' required='true' />
      </Group>
      <Group position='center' spacing='xl' grow>
        <FloatingLabelInput label='Address' required='true' />
      </Group>
    </div>
  );
}
