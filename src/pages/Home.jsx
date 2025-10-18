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
  Group,
  Image, 
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { 
  IconShieldLock, 
  IconGps, 
  IconTools, 
  IconQuote,
  IconRoute, 
  IconBolt, 
  IconWaterpolo, 
} from '@tabler/icons-react'; 

// RE-ADDED: Logo import for branding consistency (from previous steps)
import CULSJA_Logo from '../img/CULSJA_logo.png'; 
// ADDED: New image import for the equipment showcase
import DrillWorker from '../img/DrillWorker.png';

export default function Home() {
  const theme = useMantineTheme();
  
  // Define colors from your theme for cleaner use
  const primaryColor = theme.colors.primary[7]; // Dark Earth Brown
  const accentYellow = theme.colors.yellow[6];  // Accent Yellow
  const accentGreen = theme.colors.green[6];    // Safety Green

  const valueProps = [
    { icon: IconGps, title: "Precision Locating (GPR)", description: "Leveraging Ground Penetrating Radar (GPR) and advanced technology for accurate subsurface utility mapping.", color: 'yellow' },
    { icon: IconTools, title: "Horizontal Directional Drilling (HDD)", description: "Efficient and minimally invasive utility installation using specialized Ditch Witch and RD drill equipment.", color: 'primary' },
    { icon: IconShieldLock, title: "Safety Certified & Insured", description: "Our operations meet all Central Florida utility standards, ensuring maximum site and crew safety.", color: 'green' },
  ];

  // Service highlights data 
  const serviceHighlights = [
    { icon: IconRoute, title: "Fiber & Data Conduit Installation", description: "Expert installation of underground fiber optic and communications infrastructure." },
    { icon: IconBolt, title: "6-inch Power Conduits", description: "Safe and compliant burial and connection of high-capacity electrical conduits." },
    { icon: IconWaterpolo, title: "Water and Utility Relocation", description: "Professional locating and installation services for critical water and gas lines." },
  ];

  // Component to render the service cards with stacked icon/title layout
  const ServiceHighlightCard = ({ icon: Icon, title, description }) => (
    <Card shadow="md" padding="xl" radius="md" bg="white" withBorder>
        {/* Icon is placed first and centered */}
        <Box ta="center">
            <ThemeIcon size="lg" radius="md" color={accentGreen} mx="auto" mb="xs">
                <Icon style={{ width: 24, height: 24 }} /> 
            </ThemeIcon>
        </Box>
        {/* Title is placed below the icon and centered */}
        <Title order={4} c={primaryColor} ta="center" mb="xs">{title}</Title>
        {/* Description follows */}
        <Text size="sm" c="dimmed" ta="center">{description}</Text>
    </Card>
  );

  return (
    <> 
      {/* 1. Hero Section: Image Background (Drilling Perspective Placeholder) */}
      <Box 
        py={150} 
        style={{ 
          position: 'relative', 
          textAlign: 'center', 
          // Placeholder image for drilling - Replace this URL with a real image later
          backgroundImage: `url('placeholder_drilling_image.jpg')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: 500
        }}
      >
        <Box 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(76, 49, 28, 0.7)', // Dark semi-transparent brown overlay
            zIndex: 1,
          }}
        />
        
        <Container size="lg" style={{ position: 'relative', zIndex: 2 }}>
          <Title 
            order={1} 
            c="white" 
            fw={900} 
            mb="md"
            style={{ fontSize: '3rem', textShadow: '0 3px 6px rgba(0,0,0,0.8)' }}
          >
            Underground Utility Expertise for Central Florida.
          </Title>
          <Text size="xl" c="primary.0" mb="xl" style={{ fontWeight: 500 }}>
            CULSJA Commercial delivers precision Horizontal Directional Drilling (HDD) and comprehensive utility locating services for municipal and commercial projects.
          </Text>
          
          <Group justify="center" gap="lg">
            <Button 
              component={Link} 
              to="/contact" 
              size="xl" 
              color={accentYellow} // Yellow CTA
              leftSection={<IconQuote size={24} />}
            >
              Request a Project Quote
            </Button>
            <Button 
              component={Link} 
              to="/services" 
              size="xl" 
              variant="white"
              c={primaryColor} // Dark brown text on white
            >
              View Our Capabilities
            </Button>
          </Group>
        </Container>
      </Box>

      {/* 2. Value Proposition Grid: Earth Brown Background (Why Choose CULSJA) */}
      <Box bg={theme.colors.primary[0]}> {/* Lightest Brown Background */}
        <Container size="lg" py={80}>
          {/* LOGO INTEGRATION: Uses the 75x75 size */}
          <Group justify="center" align="center" mb={60}>
            <Image
                src={CULSJA_Logo}
                alt="CULSJA Logo"
                h={75} // 150% increase for visual impact
                w={75} 
                fit="contain"
            />
            <Title order={2} ta="center" c={primaryColor}>
                Why Choose CULSJA Commercial?
            </Title>
          </Group>
            
          <SimpleGrid 
            cols={{ base: 1, md: 3 }} 
            spacing="xl"
            verticalSpacing="xl"
          >
            {valueProps.map((prop) => (
              <Card 
                  key={prop.title} 
                  shadow="md" 
                  padding="xl" 
                  radius="md" 
                  withBorder 
                  ta="center"
                  bg="white" // White card background
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
      
      {/* 3. Highlighted Services (Vertical Icon/Title Layout Applied) */}
      <Box py={80} bg="gray.1">
        <Container size="lg">
            <Title order={2} ta="center" mb={60} c={primaryColor}>
                Core Utility & Infrastructure Services
            </Title>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
                {serviceHighlights.map((service, index) => (
                    <ServiceHighlightCard 
                        key={index} 
                        {...service} 
                    />
                ))}
            </SimpleGrid>
            <Box ta="center" mt={60}>
                <Button component={Link} to="/services" size="lg" variant="filled" color={primaryColor}>
                    Explore All Capabilities
                </Button>
            </Box>
        </Container>
      </Box>

      {/* 4. Equipment Showcase (Updated with new image and positioning) */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={60} c={primaryColor}>
            Our Equipment: Ditch Witch, RD Drills, and More
        </Title>
        <Card shadow="md" padding="xl" radius="md" withBorder>
            <Image
                src={DrillWorker}
                height={400} 
                alt="Black man operating a Ditch Witch directional drill on a utility site."
                // ADDED: radius for rounded corners
                radius="md" 
                style={{ 
                    objectFit: 'cover',
                    // MODIFIED: Focuses the image positioning on the top (the operator's face)
                    objectPosition: 'top' 
                }}
            />
            {/* MODIFIED: The description is confirmed to have no bold markdown (**) */}
            <Text ta="center" c="dimmed" mt="lg" style={{ fontSize: '1.1em', lineHeight: 1.6 }}>
                We commit to minimizing site impact and maximizing efficiency by utilizing a diverse fleet of industry-leading drilling, locating, and excavation equipment. This includes specialized Ditch Witch and RD Drill units for various soil conditions and pipe diameters, along with Ground Penetrating Radar (GPR) for unmatched locating accuracy. We maintain and leverage plenty of other essential forms of utility equipment to manage every phase of the installation process, ensuring project success from bore design to site cleanup.
            </Text>
        </Card>
      </Container>


      {/* 5. Final Call to Action Banner */}
      <Box bg={primaryColor} py={80} ta="center">
        <Container size="md">
          <Title order={2} c="white" mb="md">Need a Utility Partner in Central Florida?</Title>
          <Text size="lg" c="primary.0" mb="xl">
            Leverage our 15+ years of industry experience. Contact us today for a precise project estimate.
          </Text>
          <Button 
              component={Link} 
              to="/contact" 
              size="xl" 
              color={accentYellow} 
              leftSection={<IconQuote size={24} />}
          >
              Request an Estimate
          </Button>
        </Container>
      </Box>
    </>
  );
}