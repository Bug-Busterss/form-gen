import { Card, Group, Text, List, Center } from "@mantine/core";

export default function Requiremnts() {
  return (
    <Card withBorder shadow="sm" radius="md" m="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Requiremnets</Text>
        </Group>
      </Card.Section>

      <Card.Section m="sm">
        <Group>
          <List size="lg">
            <List.Item>Aadhar card</List.Item>
            <List.Item>Ration card</List.Item>
            <List.Item>Identity card (voter id etc) </List.Item>
            <List.Item>Husband’s death certificate </List.Item>
            <List.Item>
              Bank passbook, bank account number and ifsc code d
            </List.Item>
            <List.Item>Birth certificate</List.Item>
            <List.Item>Income certificate</List.Item>
            <List.Item>Caste certificate</List.Item>
            <List.Item>Passport size photo</List.Item>
            <List.Item mb="sm">Registered mobile number</List.Item>
          </List>
        </Group>
      </Card.Section>
    </Card>
  );
}
