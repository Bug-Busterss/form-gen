import { Button } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";

interface Props {
  name: string;
}

export default function MyButton({ name }: Props) {
  const theme = useMantineTheme();
  return (
    <Button
      radius='lg'
      size='lg'
      m='sm'
      sx={{
        "&:hover": {
          backgroundColor: "white",
          color: "#228be6",
          border: "2px solid #228be6",
        },
      }}>
      {name}
    </Button>
  );
}
