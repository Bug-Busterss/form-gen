import { Card, Group, Text, List } from "@mantine/core";

export default function Requiremnts() {
  return (
    <Card withBorder shadow='sm' radius='md' m='sm' mt='xl'>
      <Card.Section
        withBorder
        inheritPadding
        py='xs'
        sx={{ fontSize: "1.3rem" }}>
        <Group position='apart'>
          <Text weight={700}>Requiremnets</Text>
        </Group>
      </Card.Section>

      <Card.Section m='sm' sx={{ fontSize: "1rem" }}>
        <Group>
          <List size='lg'>
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
            <List.Item mb='md'>Registered mobile number</List.Item>
          </List>
        </Group>
      </Card.Section>
    </Card>
  );
}
