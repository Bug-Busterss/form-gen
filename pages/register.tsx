import { useForm } from "@mantine/form";
import {
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Anchor,
  Stack,
  Container,
  Center,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import axios from "axios";
import AuthInput from "../components/AuthInput";
import { IconUserPlus } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function RegisterForm(props: PaperProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      password: "",
      email: "",
    },

    validate: {
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
      email: (val) =>
        val.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm) === null
          ? "Invalid email address"
          : null,
    },
  });

  const router = useRouter();

  return (
    <Container sx={{ marginTop: "10rem" }}>
      <Center>
        <Paper
          radius='md'
          p='xl'
          withBorder
          sx={{ backgroundColor: "#C1C2C5" }}
          {...props}>
          <Text size='lg' weight={500}>
            Register
          </Text>

          <form
            onSubmit={form.onSubmit(async (formData) => {
              setLoading(true);
              const { data } = await axios.post(
                "http://localhost:3000/api/signup",
                {
                  email: formData.email,
                  password: formData.password,
                }
              );
              setLoading(false);
              if (!data.user) return;
              console.log("USER SIGNED UP", data.user);
              router.push("/login");
            })}>
            <Stack mt='xl'>
              <AuthInput
                label='Email'
                input={TextInput}
                {...form.getInputProps("email")}
              />
              <AuthInput
                label='Password'
                input={PasswordInput}
                {...form.getInputProps("password")}
              />
            </Stack>

            <Group position='apart' mt='xl'>
              <Anchor
                component={Link}
                type='button'
                color='dimmed'
                size='xs'
                href='/login'>
                Already have an account? Login
              </Anchor>
              <Button
                rightIcon={<IconUserPlus size='18' />}
                variant='gradient'
                gradient={{ from: "#AD1DEB", to: "#6E72FC" }}
                type='submit'
                loading={loading}>
                Register
              </Button>
            </Group>
          </form>
        </Paper>
      </Center>
    </Container>
  );
}
