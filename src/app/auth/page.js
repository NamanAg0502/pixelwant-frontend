'use client';

import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import { useAuth } from '@/context/auth.context';

export default function Login(props) {
  const { login } = useAuth();
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      username: '',
      password: '',
      terms: true,
    },

    validate: {
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  return (
    <Container size={480} my={40}>
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={700}>
          Welcome to Mantine, {type} with
        </Text>

        <form
          onSubmit={form.onSubmit(() =>
            login(form.values.username, form.values.password)
          )}
        >
          <Stack>
            {type === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                radius="md"
              />
            )}
            {type === 'register' && (
              <TextInput
                label="Email"
                placeholder="hello@example.com"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue('email', event.currentTarget.value)
                }
                radius="md"
                required
              />
            )}

            <TextInput
              required
              label="Username"
              placeholder="Your username"
              value={form.values.username}
              onChange={(event) =>
                form.setFieldValue('username', event.currentTarget.value)
              }
              error={form.errors.username && 'Invalid username'}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.currentTarget.value)
              }
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
              radius="md"
            />

            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) =>
                  form.setFieldValue('terms', event.currentTarget.checked)
                }
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="sm"
            >
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
