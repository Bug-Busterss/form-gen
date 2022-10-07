import { useState } from "react";
import { TextInput, createStyles } from "@mantine/core";

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
      fontSize: floating ? theme.fontSizes.xl : theme.fontSizes.md,
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

interface Props {
  label: string;
  //   isNumber?: boolean;
  required?: boolean;
}

export default function FloatingLabelInput({ label, required }: Props & any) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return (
    <TextInput
      label={label}
      placeholder={label}
      required={required}
      classNames={classes}
      value={value}
      size="md"
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="xl"
      autoComplete="nope"
    />
  );
}
