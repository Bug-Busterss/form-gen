import { Button, Card, Group, Text } from "@mantine/core";

interface Data {
  text1: String;
  text2: String;
}
export default function EditCard({ text1, text2 }: Data) {
  return (
    <div>
      <Card
        radius={50}
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          marginRight: "15px",
          marginLeft: "15px",
          alignItems: "center",
        })}
        shadow="md"
        // p="xl"
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        // target="_blank"
      >
        <Group
          sx={(theme) => ({
            marginLeft: "30px",
          })}
        >
          <Text weight={500} size="lg" mt="md">
            {text1}: {text2}
          </Text>
        </Group>
        <Group>
          <Button radius="xl" size="md">
            Edit
          </Button>
        </Group>
      </Card>
    </div>
  );
}
