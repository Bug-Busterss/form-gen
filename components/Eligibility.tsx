import { Card, Group, Text, List } from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons";

export default function Eligibility() {
  return (
    <Card withBorder shadow="sm" radius="md" m="sm">
      <Card.Section
        withBorder
        inheritPadding
        py="xs"
        sx={{ fontSize: "1.3rem" }}
      >
        <Group position="apart">
          <Text weight={700}>Eligibility Criteria</Text>
        </Group>
      </Card.Section>
      <Card.Section m="sm" sx={{ fontSize: "1rem" }}>
        <Group>
          <List size="lg">
            <List.Item>
              The applicant must acquire the domicile of Gujarat.
            </List.Item>
            <List.Item>
              The candidate must come under the category of the BPL (Below the
              poverty line)
            </List.Item>
            <List.Item>
              The minimum age of the applicant should be 18 years and a maximum
              of 60 years.
            </List.Item>
            <List.Item>
              Only widow candidates are eligible for this scheme.
            </List.Item>
            <List.Item>
              The candidate must relate to the EWS (Economical weaker section)
              of the society.
            </List.Item>
            <List.Item>
              The certificate of annual income has to be submitted along with
              the application form.
            </List.Item>
            <List.Item>
              If the candidate belongs from the rural area, then the salary
              should be less than or equal should 1 lakh and 20k INR per annum.
            </List.Item>
            <List.Item>
              And if the applicant belongs from the urban area, then the annual
              family income should be less than or equal to the 1 lakh and 50K
              INR per annum.
            </List.Item>
            <List.Item mb="md">
              If the widow woman will be married again, then she cannot take the
              benefit of this scheme.
            </List.Item>
          </List>
        </Group>
      </Card.Section>
    </Card>
  );
}
