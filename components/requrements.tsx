import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons";

function Demo() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item icon={<IconEye size={14} />}>Preview all</Menu.Item>
              <Menu.Item icon={<IconTrash size={14} />} color="red">
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" color="dimmed" size="sm">
        <Text component="span" inherit color="blue">
          200+ images uploaded
        </Text>{" "}
        since last visit, review them to select which one should be added to
        your gallery
      </Text>

      <Card.Section mt="sm"></Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}></SimpleGrid>
      </Card.Section>
    </Card>
  );
}
