import {
  Text,
  Button,
  Group,
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
          sx={{ backgroundColor: "#A6A7AB" }}
        >
          <Text size="lg" weight={500}>
            Login
          </Text>
          <Stack mt="md">
            <AuthInput input={TextInput} label="Email" />
            <AuthInput input={PasswordInput} label="Password" />
          </Stack>
          <Group position="apart" mt="xl">
            <Anchor type="button" sx={{ color: "#101113" }} size="xs">
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
