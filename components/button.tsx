import { Button } from "@mantine/core";

interface Props {
  name: string;
}

export default function MyButton({ name }: Props) {
  return (
    <Button radius="lg" size="lg">
      {name}
    </Button>
  );
}
