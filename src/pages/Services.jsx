// src/pages/Services.jsx
import { 
    Box, 
    Container, 
    Title, 
    Text, 
    SimpleGrid, 
    Card, 
    ThemeIcon, 
    Group, 
    Button,
    useMantineTheme,
    Image 
} from '@mantine/core';
import { 
    IconBolt, 
    IconGps, 
    IconWaterpolo,
    IconTools, 
    IconRoute, 
    IconMapPin, 
    IconPhoneCall
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import CULSJA_Logo from '../img/CULSJA_logo.png'; 

export default function Services() {
    const theme = useMantineTheme();
    const primaryColor = theme.colors.primary[7];
    const accentYellow = theme.colors.yellow[6];

    const servicesData = [
      {
        icon: IconTools, 
        title: 'Horizontal Directional Drilling (HDD)',
        description: 'Trenchless installation of pipes and conduits using our Ditch Witch and RD drilling fleet, minimizing environmental impact and surface disruption.',
        color: 'primary.6',
      },
      {
        icon: IconGps, 
        title: 'Subsurface Utility Locating (GPR)',
        description: 'Advanced utility locating using Ground Penetrating Radar (GPR) and radio detection to accurately map all underground facilities before excavation.',
        color: 'yellow.6',
      },
      {
        icon: IconRoute, 
        title: 'Fiber Optic & Communications Conduits',
        description: 'Expert installation of communication infrastructure, including secure, future-proof underground routes for fiber optic cables and data conduits.',
        color: 'green.6',
      },
      {
        icon: IconBolt, 
        title: '6-inch Power Conduit Installation',
        description: 'Safe and certified installation of underground electrical pathways and 6-inch power conduits for commercial and industrial applications.',
        color: 'red.6',
      },
      {
        icon: IconWaterpolo, 
        title: 'Water & Waste Utility Installation',
        description: 'New installation and replacement of underground water, sewer, and storm drainage lines, compliant with all local municipal codes.',
        color: 'teal.6',
      },
      {
        icon: IconMapPin, 
        title: 'Utility Potholing & Bore Path Design',
        description: 'Comprehensive planning, design, and safe excavation (potholing) to verify utility depth and position, ensuring zero conflict and project accuracy.',
        color: 'indigo.6',
      },
    ];

    const serviceCards = servicesData.map((service) => (
        <Card 
          key={service.title} 
          shadow="md" 
          padding="xl" 
          radius="md" 
          withBorder
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }} 
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
          
          <Button 
            component={Link} 
            to="/contact" 
            variant="light" 
            color={service.color.split('.')[0]} 
            mt="md"
            fullWidth
          >
            Discuss Project Needs
          </Button>
        </Card>
    ));

    return (
        <Box>
          {/* 1. Hero/Introduction Section (Dark Brown Banner) */}
          <Box py={80} bg={primaryColor} ta="center">
            <Container size="sm">
              {/* LOGO INTEGRATION: Centered, now 188x188, with drop-shadow for contrast */}
              <Image
                  src={CULSJA_Logo}
                  alt="CULSJA Commercial Logo"
                  h={188} // MODIFIED: Increased by 125% (150 * 1.25 = 187.5, rounded to 188)
                  w={188} // MODIFIED: Increased by 125%
                  fit="contain"
                  mx="auto" 
                  mb="xl" 
                  style={{ filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.4))' }} 
              />
              <Title order={1} c="white" mb="md">Comprehensive Underground Utility Services</Title>
              <Text size="xl" c="primary.0">
                CULSJA Commercial provides end-to-end subsurface utility engineering (SUE) and installation, backed by 15+ years of Central Florida industry experience.
              </Text>
            </Container>
          </Box>

          {/* 2. Main Service Cards Grid */}
          <Container size="xl" py={120}>
            <Title order={2} ta="center" mb={60} c={primaryColor}>
                Specialized Drilling, Locating, and Installation
            </Title>
            
            <SimpleGrid 
              cols={{ base: 1, sm: 2, lg: 3 }} 
              spacing="xl"
              verticalSpacing="xl"
            >
              {serviceCards}
            </SimpleGrid>
          </Container>
          
          {/* 3. Call to Action Footer (Yellow Secondary Color) */}
          <Box py={60} bg={theme.colors.yellow[0]} ta="center">
            <Container size="md">
                <Group justify="center" align="center" direction="column" gap="md">
                    <Title order={3} c="dark.8">Ready to Scope Your Next Project?</Title>
                    <Text size="lg" c="dimmed">
                        Contact CULSJA Commercial today for a project consultation and precise estimate.
                    </Text>
                    <Button 
                        component={Link} 
                        to="/contact" 
                        size="lg" 
                        color={accentYellow} 
                        leftSection={<IconPhoneCall size={24} />}
                    >
                        Request a Quote
                    </Button>
                </Group>
            </Container>
          </Box>

        </Box>
    );
}