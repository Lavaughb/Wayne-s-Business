// src/pages/Home.jsx
import { 
  Stack, 
  Title, 
  Text, 
  Button, 
  Card, 
  SimpleGrid, 
  Container, 
  useMantineTheme, 
  Box,
  ThemeIcon,
  Group 
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Link } from 'react-router-dom';
import { IconHandClick, IconUserCheck, IconHomeCheck, IconTools, IconPhoneCall } from '@tabler/icons-react'; 

export default function Home() {
  const theme = useMantineTheme();
  
  // Define colors from your theme for cleaner use
  const primaryColor = theme.colors.primary[6]; // Dark Blue
  const accentColor = theme.colors.yellow[5];  // Middle Yellow
  const darkBlue = theme.colors.primary[6];

  const valueProps = [
    { icon: IconHandClick, title: "Simple Process", description: "Easy booking and clear communication from start to finish.", color: 'primary' },
    { icon: IconUserCheck, title: "Local Trust", description: "Generations of service in the community. We treat your home like our own.", color: 'yellow' },
    { icon: IconHomeCheck, title: "Guaranteed Quality", description: "Insured and experienced professionals ensuring the job is done right.", color: 'red' },
  ];

  const serviceHighlights = [
    { title: "Home Repairs", description: "Fixing faucets, drywall, and general maintenance for peace of mind." },
    { title: "Small Renovations", description: "From kitchen updates to bathroom refreshes, we manage the small projects." },
    { title: "Appliance Installs", description: "Professional setup of new washers, dryers, and essential home appliances." },
  ];

  return (
    <> 
      {/* 1. Hero Carousel: GRADIENT */}
      <Carousel 
        height={500} 
        slideSize="100%" 
        align="start" 
        loop
        withIndicators 
      >
        {/* Slide 1: Primary Service Introduction with Gradient */}
        <Carousel.Slide 
            style={{ 
                background: `linear-gradient(135deg, ${primaryColor} 0%, ${theme.colors.primary[4]} 100%)`, 
                color: 'white' 
            }}
        > 
          <Container size="lg" h="100%">
            <Stack 
              justify="center" 
              align="center" 
              h="100%" 
              p="xl" 
              ta="center"
            >
              <Title order={1} c="white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                Quality Services, Personal Touch
              </Title>
              <Text size="xl" maw={600} c="primary.0" style={{ fontWeight: 500 }}>
                Wayne's Family Business provides reliable, top-quality home repair and renovation services, backed by years of family trust.
              </Text>
              {/* 🚨 FIX: Responsive Group ensures buttons stack on mobile */}
              <Group 
                  mt="xl" 
                  gap="md" 
                  justify="center" 
                  direction={{ base: 'column', sm: 'row' }} 
              >
                <Button component={Link} to="/contact" size="xl" color={accentColor} shadow="lg">
                  Get a Free Estimate
                </Button>
                <Button component={Link} to="/services" size="xl" variant="white" color="white" c={primaryColor}>
                  View All Services
                </Button>
              </Group>
            </Stack>
          </Container>
        </Carousel.Slide>

        {/* Slide 2: Secondary CTA/Message */}
        <Carousel.Slide bg={theme.colors.gray[1]}> 
            <Container size="lg" h="100%">
                <Stack 
                    justify="center" 
                    align="center" 
                    h="100%" 
                    p="xl" 
                    ta="center"
                >
                    <Title order={2} c="dark.7">We Handle the Home, You Enjoy the Family</Title>
                    <Text size="xl" maw={600} c="dimmed">
                        Don't let home maintenance stress you out. We offer seasonal check-ups and quick fixes to keep your property running smoothly.
                    </Text>
                    <Button component={Link} to="/about" size="lg" color="primary.7" mt="lg">
                        Meet Our Team
                    </Button>
                </Stack>
            </Container>
        </Carousel.Slide>
      </Carousel>

      {/* 2. Value Proposition Grid: OFF-WHITE BACKGROUND */}
      <Box bg="gray.0">
        <Container size="xl" py={80}>
          <Title order={2} ta="center" mb={60} c="primary.7">Why Choose Wayne's Family Business?</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            {valueProps.map((prop) => (
              <Card 
                  key={prop.title} 
                  shadow="md" 
                  padding="xl" 
                  radius="md" 
                  withBorder 
                  ta="center"
                  sx={{
                      boxShadow: `0 8px 15px -5px ${theme.colors[prop.color][2]}`, 
                      transition: 'transform 0.2s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': { 
                          transform: 'translateY(-8px)', 
                          boxShadow: `0 12px 20px -5px ${theme.colors[prop.color][4]}`, 
                      }
                  }}
              >
                <ThemeIcon size="xl" radius="xl" color={prop.color} mx="auto" mb="md">
                  <prop.icon style={{ width: 28, height: 28 }} />
                </ThemeIcon>
                <Title order={4} c="dark.7" mb="xs">{prop.title}</Title>
                <Text size="sm" c="dimmed">{prop.description}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
      
      {/* 3. Highlighted Services Section: SLIGHTLY DARKER GREY STRIPE */}
      <Box bg="gray.1" py={80}>
        <Container size="lg">
            <Title order={2} ta="center" mb={60} c="primary.7">Our Most Popular Services</Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
                {serviceHighlights.map((service) => (
                    <Card key={service.title} padding="xl" radius="md" bg="white" shadow="sm">
                        <Group>
                            <ThemeIcon size="lg" radius="md" color="primary.6">
                                {/* IconTools used here */}
                                <IconTools style={{ width: 20, height: 20 }} /> 
                            </ThemeIcon>
                            <Title order={4} c="primary.6">{service.title}</Title>
                        </Group>
                        <Text size="sm" c="dimmed" mt="md">{service.description}</Text>
                    </Card>
                ))}
            </SimpleGrid>
            <Box ta="center" mt={60}>
                <Button component={Link} to="/services" size="lg" variant="filled" color="primary.7">
                    Explore All 6 Services
                </Button>
            </Box>
        </Container>
      </Box>

      {/* 4. Final Call to Action Banner */}
      <Box bg={darkBlue} py={80} ta="center">
        <Container size="md">
          <Title order={2} c="white" mb="md">Ready to Start Your Project?</Title>
          <Text size="lg" c="primary.0" mb="xl">
            Click below for a free, no-obligation estimate from our family to yours.
          </Text>
          <Button 
              component={Link} 
              to="/contact" 
              size="xl" 
              color="yellow.5" 
              leftSection={<IconPhoneCall size={24} />}
          >
              Request an Estimate
          </Button>
        </Container>
      </Box>

    </>
  );
}