// src/pages/Contact.jsx
import { Stack, Title, Text, Anchor, Container, ThemeIcon, Group, Card, TextInput, Textarea, Button, SimpleGrid } from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { useForm } from '@mantine/form'; // 🚨 NEW: Import Mantine's form hook for validation

export default function Contact() {
  
  // 🚨 NEW: Use Mantine's useForm hook for validation
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.length > 0 ? null : 'Name is required'),
      message: (value) => (value.length > 10 ? null : 'Message must be at least 10 characters'),
    },
  });

  return (
    <Container size="lg" py="xl"> 
      <Stack align="center" gap="xl">
        <Title order={1} c="primary.7">Get in Touch with Our Family</Title>
        <Text size="lg" ta="center" c="dimmed" maw={600}>
          We're here to answer your questions and discuss your project. Contact us via the form below, or reach out directly using the information provided.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" w="100%" mt="lg">
            
            {/* Column 1: Contact Information Card (Unchanged) */}
            <Card shadow="md" padding="xl" radius="md" withBorder>
                <Stack gap="xl">
                    <Title order={3} c="primary.6">Direct Contact Info</Title>
                    {/* ... (Direct Contact Blocks remain the same) ... */}
                    <Group gap="md" wrap="nowrap">
                        <ThemeIcon size="lg" radius="xl" color="primary">
                            <IconMail style={{ width: 20, height: 20 }} />
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Email Address</Text>
                            <Anchor href="mailto:wayne@example.com" target="_blank" c="primary.6">wayne@example.com</Anchor>
                        </Stack>
                    </Group>
                    <Group gap="md" wrap="nowrap">
                        <ThemeIcon size="lg" radius="xl" color="primary">
                            <IconPhone style={{ width: 20, height: 20 }} />
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Phone Number</Text>
                            <Anchor href="tel:+11234567890" c="primary.6">(123) 456-7890</Anchor>
                        </Stack>
                    </Group>
                    <Group gap="md" wrap="nowrap">
                        <ThemeIcon size="lg" radius="xl" color="primary">
                            <IconMapPin style={{ width: 20, height: 20 }} />
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Business Location</Text>
                            <Text c="dimmed" style={{ lineHeight: 1.4 }}>123 Family Way, Anytown, USA 12345</Text>
                        </Stack>
                    </Group>
                </Stack>
            </Card>

            {/* Column 2: Contact Form - Now integrated with Formspree */}
            <Card shadow="md" padding="xl" radius="md" withBorder>
                <Title order={3} mb="xl" c="dark.7">Send Us a Message</Title>
                
                {/* 🚨 KEY CHANGES FOR FORMSPREE: */}
                <form 
                    action="YOUR_FORMSPREE_ENDPOINT" // <-- 1. **REQUIRED:** Replace with your Formspree URL (e.g., https://formspree.io/f/abcd123)
                    method="POST"                    // <-- 2. **REQUIRED:** Set method to POST
                    onSubmit={form.onSubmit(() => form.reset())} // <-- 3. Mantine form hook handles validation before submission
                >
                    <Stack gap="md">
                        <TextInput
                            label="Your Name"
                            placeholder="John Doe"
                            {...form.getInputProps('name')} // Binds name input to Mantine's form state
                        />
                        <TextInput
                            label="Your Email"
                            placeholder="your.email@example.com"
                            type="email"
                            {...form.getInputProps('email')} // Binds email input
                        />
                        {/* Special field for Formspree to capture the subject line */}
                        <TextInput
                            type="hidden"
                            name="_subject"
                            value="New Contact Form Submission from Wayne's Family Business"
                        />
                        <Textarea
                            label="Project Details"
                            placeholder="Tell us about your home repair or renovation needs..."
                            minRows={4}
                            {...form.getInputProps('message')} // Binds message input
                        />
                        <Button 
                            type="submit" 
                            color="yellow.6"
                            size="md"
                            leftSection={<IconSend size={20} />}
                            mt="sm"
                        >
                            Send Message
                        </Button>
                    </Stack>
                </form>
            </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}