import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  CardSection,
  Center,
  Container,
  Paper,
  Stack,
  Anchor,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { IconLogin } from "@tabler/icons";
import AuthInput from "../components/AuthInput";

export default function MyLogin() {
  return (
    <Container sx={{ marginTop: "10rem" }}>
      <Center>
        <Paper
          radius="md"
          p="md"
          withBorder
          sx={{ backgroundColor: "#909296" }}
        >
          <Text size="lg" weight={500}>
            Login
          </Text>
          <Stack mt="md">
            <AuthInput
              input={TextInput}
              label="Email"
              //   {...form.getInputProps("username")}
            />
            <AuthInput
              input={PasswordInput}
              label="Password"
              //   {...form.getInputProps("password")}
            />
          </Stack>
          <Group position="apart" mt="xl">
            <Anchor type="button" color="dimmed" size="xs">
              Don't have an account? Register
            </Anchor>
            <Button
              rightIcon={<IconLogin size="18px" />}
              variant="gradient"
              gradient={{ from: "#AD1DEB", to: "#6E72FC" }}
              type="submit"
            >
              Login
            </Button>
          </Group>
        </Paper>
      </Center>
    </Container>
  );
}
function getCurentUser(arg0: any) {
  throw new Error("Function not implemented.");
}
