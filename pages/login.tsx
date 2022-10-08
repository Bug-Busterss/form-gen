/* eslint-disable react/no-unescaped-entities */
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
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLogin } from '@tabler/icons';
import AuthInput from '../components/AuthInput';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MyLogin() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },

    validate: {
      password: val =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
      email: val =>
        val.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm) === null
          ? 'Invalid email address'
          : null,
    },
  });
  const router = useRouter();

  return (
    <Container sx={{ marginTop: '10rem' }}>
      <Center>
        <form
          onSubmit={form.onSubmit(async formData => {
            setLoading(true);
            const { email, password } = formData;
            await signIn('credentials', { email, password, redirect: false });
            setLoading(false);
            router.push('/dashboard');
          })}
        >
          <Paper
            radius='md'
            p='md'
            withBorder
            sx={{ backgroundColor: '#A6A7AB' }}
          >
            <Text size='lg' weight={500}>
              Login
            </Text>
            <Stack mt='md'>
              <AuthInput
                input={TextInput}
                label='Email'
                {...form.getInputProps('email')}
              />
              <AuthInput
                input={PasswordInput}
                label='Password'
                {...form.getInputProps('password')}
              />
            </Stack>
            <Group position='apart' mt='xl'>
              <Anchor type='button' sx={{ color: '#101113' }} size='xs'>
                Don't have an account? Register
              </Anchor>
              <Button
                rightIcon={<IconLogin size='18px' />}
                variant='gradient'
                gradient={{ from: '#AD1DEB', to: '#6E72FC' }}
                type='submit'
                loading={loading}
              >
                Login
              </Button>
            </Group>
          </Paper>
        </form>
      </Center>
    </Container>
  );
}
