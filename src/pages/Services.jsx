// src/pages/Services.jsx
import { 
    Box, 
    Container, 
    Title, 
    Text, 
    SimpleGrid, 
    Card, // <--- 🚨 CRITICAL FIX: Card component imported from Mantine
    ThemeIcon, 
    Group, 
    Button 
} from '@mantine/core';
import { // Icon i
    IconBolt, 
    IconBuildingCottage, 
    IconAirConditioning,
    IconHomeDollar,
    IconPhoneCall
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

// Define the core services data
const servicesData = [
  {
    icon: IconHomeDollar,
    title: 'General Home Repairs & Maintenance',
    description: 'From leaky faucets and drywall patches to fixture replacements, we handle all the small jobs that keep your home running perfectly. Reliable and prompt service is our guarantee.',
    color: 'primary.6',
  },
  {
    icon: IconBolt,
    title: 'Electrical & Plumbing Quick Fixes',
    description: 'Safe and certified service for common electrical issues (outlets, lights) and minor plumbing repairs (clogs, pipe leaks). Trust our expertise for safe home systems.',
    color: 'yellow.6',
  },
  {
    icon: IconBuildingCottage,
    title: 'Small Renovations & Remodeling',
    description: 'We manage and execute small-to-mid-sized renovation projects, including bathroom updates, kitchen backsplashes, and basement finishing. We bring your vision to life.',
    color: 'red.6',
  },
  {
    icon: IconAirConditioning,
    title: 'Appliance & HVAC Installation',
    description: 'Expert installation of major appliances (washers, dryers, dishwashers) and routine maintenance for HVAC systems to ensure comfort and energy efficiency year-round.',
    color: 'green.6',
  },
  {
    icon: IconHomeDollar,
    title: 'Seasonal Home Check-ups',
    description: 'Comprehensive inspection services to prepare your home for changing seasons, preventing costly damage and identifying issues before they become major problems.',
    color: 'teal.6',
  },
  {
    icon: IconHomeDollar,
    title: 'Custom Project Consulting',
    description: 'Not sure where to start? We offer consultation to scope out complex projects, provide estimates, and connect you with trusted specialized contractors when needed.',
    color: 'indigo.6',
  },
];

export default function Services() {
  
  // Map the service data to Mantine Card components
  const serviceCards = servicesData.map((service) => (
    <Card 
      key={service.title} 
      shadow="md" 
      padding="xl" 
      radius="md" 
      withBorder
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }} // Ensures cards are same height
    >
      <ThemeIcon 
        size="lg" 
        radius="md" 
        color={service.color} 
        mb="md"
      >
        <service.icon style={{ width: 24, height: 24 }} />
      </ThemeIcon>
      
      <Title order={4} mb="xs" c="dark.7">{service.title}</Title>
      <Text size="sm" c="dimmed" style={{ flexGrow: 1 }}>{service.description}</Text>
      
      {/* Button at the bottom of the card */}
      <Button 
        component={Link} 
        to="/contact" 
        variant="light" 
        color={service.color.split('.')[0]} // Use the base color from the defined palette
        mt="md"
        fullWidth
      >
        Request a Quote
      </Button>
    </Card>
  ));

  return (
    <Box>
      {/* 1. Hero/Introduction Section (Primary Blue Banner) */}
      <Box py={80} bg="primary.6" ta="center">
        <Container size="sm">
          <Title order={1} c="white" mb="md">How Our Family Can Help Yours</Title>
          <Text size="xl" c="primary.0">
            We offer a comprehensive range of professional, reliable, and insured services. No job is too small, and every job is handled with family-level care.
          </Text>
        </Container>
      </Box>

      {/* 2. Main Service Cards Grid */}
      <Container size="xl" py={120}>
        <Title order={2} ta="center" mb={60} c="primary.7">
            Core Services
        </Title>
        
        {/* SimpleGrid for responsive card layout */}
        <SimpleGrid 
          cols={{ base: 1, sm: 2, lg: 3 }} 
          spacing="xl"
          verticalSpacing="xl"
        >
          {serviceCards}
        </SimpleGrid>
      </Container>
      
      {/* 3. Call to Action Footer (Yellow Secondary Color) */}
      <Box py={60} bg="yellow.0" ta="center">
        <Container size="md">
            <Group justify="center" align="center" direction="column" gap="md">
                <Title order={3} c="dark.8">Ready to Start Your Project?</Title>
                <Text size="lg" c="dimmed">
                    Contact Wayne's Family Business today for a free estimate and friendly advice.
                </Text>
                <Button 
                    component={Link} 
                    to="/contact" 
                    size="lg" 
                    color="yellow.6" 
                    leftSection={<IconPhoneCall size={24} />}
                >
                    Call Us Now
                </Button>
            </Group>
        </Container>
      </Box>

    </Box>
  );
}