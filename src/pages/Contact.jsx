// src/pages/Contact.jsx
import { 
  Stack, 
  Title, 
  Text, 
  Anchor, 
  Container, 
  ThemeIcon, 
  Group, 
  Card, 
  TextInput, 
  Textarea, 
  Button, 
  SimpleGrid, 
  useMantineTheme, 
  // ADDED: Image, Box, Overlay, Center for logo and form disabling
  Image, 
  Box, 
  Overlay, 
  Center 
} from '@mantine/core';
import { IconMail, IconPhone, IconMapPin, IconSend } from '@tabler/icons-react';
import { useForm } from '@mantine/form'; 

// ADDED: Logo import
import CULSJA_Logo from '../img/CULSJA_logo.png'; 

export default function Contact() {
  const theme = useMantineTheme();
  const primaryColor = theme.colors.primary[7];
  const accentYellow = theme.colors.yellow[6];

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      company: '', // Added company field for B2B focus
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.length > 0 ? null : 'Your Name is required'),
      message: (value) => (value.length > 10 ? null : 'Project details must be at least 10 characters'),
    },
  });

  return (
    <Container size="lg" py="xl"> 
      <Stack align="center" gap="xl">
        
        {/* LOGO INTEGRATION: Centered, 188x188 (Consistent with Services page) */}
        <Image
            src={CULSJA_Logo}
            alt="CULSJA Commercial Logo"
            h={188} 
            w={188} 
            fit="contain"
            mx="auto" 
            mb="md"
        />

        <Title order={1} c={primaryColor}>Start Your Project: Contact CULSJA Commercial</Title>
        
        {/* MODIFIED: Updated Intro Text */}
        <Text size="lg" ta="center" c="dimmed" maw={600}>
          Would you be ready to discuss your utility, drilling, or locating project? Reach out directly via the information below. Once a message is submitted through our form, a member of our team will contact you directly to initiate the quote process.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" w="100%" mt="lg">
            
            {/* Column 1: Contact Information Card */}
            <Card shadow="md" padding="xl" radius="md" withBorder>
                <Stack gap="xl">
                    <Title order={3} c={primaryColor}>Direct Project Contact</Title>
                    
                    <Group gap="md" wrap="nowrap">
                        <ThemeIcon size="lg" radius="xl" color="primary">
                            <IconMail style={{ width: 20, height: 20 }} />
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Project Email</Text>
                            <Anchor href="mailto:Culsja@gmail.com" target="_blank" c="primary.6">CULSJA@gmail.com</Anchor>
                        </Stack>
                    </Group>

                    <Group gap="md" wrap="nowrap">
                        <ThemeIcon size="lg" radius="xl" color="primary">
                            <IconPhone style={{ width: 20, height: 20 }} />
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Company Phone Number</Text>
                            <Anchor href="tel:+18632049009" c="primary.6">(863) 204-9009</Anchor>
                        </Stack>
                    </Group>
                    
                    <Group gap="md" wrap="nowrap">
                        <ThemeIcon size="lg" radius="xl" color="primary">
                            <IconMapPin style={{ width: 20, height: 20 }} />
                        </ThemeIcon>
                        <Stack gap={0}>
                            <Text fw={700}>Service Area</Text>
                            <Text c="dimmed" style={{ lineHeight: 1.4 }}>Primary service across the Central Florida region (Orlando, Tampa, Lakeland, and surrounding counties).</Text>
                        </Stack>
                    </Group>
                </Stack>
            </Card>

            {/* Column 2: Project Quote Form with Overlay (Disabled) */}
            <Card shadow="md" padding="xl" radius="md" withBorder style={{ position: 'relative' }}> 
                
                {/* ADDED: Overlay to disable the form and show "Coming Soon" message */}
                <Overlay color="#fff" opacity={0.9} zIndex={5} radius="md">
                    <Center h="100%">
                        <Stack align="center" ta="center" gap="md" maw={250}>
                            <Title order={3} c="dark.7">Direct Messaging Coming Soon</Title>
                            <Text size="sm" c="dimmed">
                                Please reach out directly using the phone number or email address to the left for immediate assistance and project quotes.
                            </Text>
                        </Stack>
                    </Center>
                </Overlay>

                <Title order={3} mb="xl" c="dark.7">Request a Project Quote</Title>
                
                <form 
                    action="YOUR_FORMSPREE_ENDPOINT" // <-- **ACTION REQUIRED:** Replace with your Formspree URL
                    method="POST"
                    onSubmit={form.onSubmit(() => form.reset())} 
                >
                    <Stack gap="md">
                        <TextInput
                            label="Your Name"
                            placeholder="John Doe"
                            {...form.getInputProps('name')}
                            disabled // Disabled field
                        />
                         <TextInput
                            label="Your Company/Municipality"
                            placeholder="ABC Developers"
                            {...form.getInputProps('company')}
                            disabled // Disabled field
                        />
                        <TextInput
                            label="Your Email"
                            placeholder="project.manager@company.com"
                            type="email"
                            {...form.getInputProps('email')}
                            disabled // Disabled field
                        />
                        {/* Special field for Formspree to capture the subject line */}
                        <TextInput
                            type="hidden"
                            name="_subject"
                            value="Project Quote Request - CULSJA Commercial"
                        />
                        <Textarea
                            label="Project Details & Location"
                            placeholder="Briefly describe your project: utility type (Fiber, Power, Water), scope, and location..."
                            minRows={4}
                            {...form.getInputProps('message')}
                            disabled // Disabled field
                        />
                        <Button 
                            type="submit" 
                            color={accentYellow}
                            size="md"
                            leftSection={<IconSend size={20} />}
                            mt="sm"
                            disabled // Disabled button
                        >
                            Submit Quote Request
                        </Button>
                    </Stack>
                </form>
            </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
