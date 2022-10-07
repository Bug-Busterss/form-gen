import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  List,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons";

export default function Requiremnts() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Review pictures</Text>
        </Group>
      </Card.Section>
      <Card.Section>
        <Group>
          <List size="lg">
            <List.Item>afs</List.Item>
            <List.Item>Install dependencies with yarn</List.Item>
            <List.Item>
              To start development server run npm start command
            </List.Item>
            <List.Item>
              Run tests to make sure your changes do not break the build
            </List.Item>
            <List.Item>Submit a pull request once you are done</List.Item>
          </List>
        </Group>
      </Card.Section>

      <Card.Section mt="sm"></Card.Section>
    </Card>
  );
}
