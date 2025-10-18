// src/pages/About.jsx
import { 
  Stack, 
  Title, 
  Text, 
  Container, 
  Timeline, 
  Box, 
  useMantineTheme,
  Badge, // Badge is imported but not used for the mobile fix
  // ADDED: Import Image and Group for logo display
  Image,
  Group,
} from '@mantine/core';
import { 
  IconTrophy,
  IconGps, 
  IconTools, // Used for HDD/Installation
  IconBuildingBridge, // Used for infrastructure/industry
} from '@tabler/icons-react';

// ADDED: Import the logo using the correct path and name
import CULSJA_Logo from '../img/CULSJA_logo.png'; 

export default function About() {
  const theme = useMantineTheme();
  const primaryColor = theme.colors.primary[7];
  
  // Sample data for the timeline (Consistent with B2B Utility Service History)
  const timelineData = [
    { 
      title: 'Owner Enters Utility Industry', 
      date: '2008', 
      description: 'The owner begins working with large, central Florida utility companies and specialized locating services, gaining deep industry knowledge.', 
      icon: IconBuildingBridge // Represents infrastructure
    },
    { 
      title: 'Specialized Expertise Developed', 
      date: '2015', 
      description: 'Extensive hands-on experience with Horizontal Directional Drilling (HDD), GPR, and complex utility installations.', 
      icon: IconTools 
    },
    { 
      title: 'CULSJA Commercial Established', 
      date: '2021', 
      description: 'The family business is founded to provide specialized, reliable, and independent utility locating and installation services.', 
      icon: IconTools // Replaced IconDrill with IconTools for stability
    },
    { 
      title: 'Serving Central Florida Utilities', 
      date: 'Present', 
      description: 'Today, we are a trusted partner for commercial and municipal projects, focused on safety and precision in every bore.', 
      icon: IconTrophy 
    },
  ];
  
  return (
    <> 
      {/* 1. Hero / Mission Section (Light Earth Tone Background) */}
      <Box bg={theme.colors.primary[0]} py={80}>
        <Container size="md">
          <Stack align="center" gap="xl" ta="center">
            
            {/* LOGO RE-INTEGRATION: 200% increase (150x150) */}
            <Group justify="center" align="center" ta="center" mb="lg">
                <Image
                    src={CULSJA_Logo}
                    alt="CULSJA Logo"
                    h={150} // 200% increase
                    w={150} 
                    fit="contain"
                />
            </Group>
            
            <Title order={1} c={primaryColor}>Precision Underground Utility Solutions</Title>
            
            <Text size="lg" maw={700} c="dark.7">
              CULSJA Commercial is a family-founded business specializing in Underground Utility Locating and Trenchless Installation. Founded in 2021, our leadership brings over 15 years of invaluable experience gained while working with major utility companies across Central Florida. We are your partner for reliable infrastructure growth.
            </Text>
            
            {/* NEW MOBILE-FRIENDLY REPLACEMENT FOR BADGE */}
            <Box
                // Mimics the Badge color scheme (green.5 light variant)
                bg={theme.colors.green[0]} 
                c={theme.colors.green[7]} 
                py="xs" 
                px="md" 
                style={{ 
                    borderRadius: theme.radius.xl, 
                    border: `1px solid ${theme.colors.green[3]}`, // Simulates the badge border
                    // Set both margins to auto so the element is centered, 
                    // and use max-width to allow the content to wrap
                    maxWidth: '80%', // Allow it to shrink on small screens
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    boxSizing: 'border-box'
                }}
            >
                <Group gap="xs" wrap="nowrap" align="center">
                    <IconGps size={16} />
                    {/* The Text component inside the Group is the key to wrapping */}
                    <Text size="sm" fw={700} style={{ whiteSpace: 'normal', lineHeight: 1.2 }}>
                        15+ Years of Central Florida Utility Expertise
                    </Text>
                </Group>
            </Box>

          </Stack>
        </Container>
      </Box>

      {/* 2. Company Timeline (Kept Short and Sweet) */}
      <Box bg="gray.1" py={100}>
        <Container size="lg">
          <Title order={2} ta="center" mb={60} c={primaryColor}>Our Timeline and Expertise</Title>
          <Timeline 
            active={timelineData.length - 1} 
            bulletSize={30} 
            lineWidth={2}
          >
            {timelineData.map((item, index) => (
              <Timeline.Item
                key={index}
                title={<Title order={4} c="primary.6">{item.title}</Title>}
                bullet={<item.icon size={16} />}
                lineVariant={index === timelineData.length - 1 ? 'solid' : 'dashed'} 
              >
                <Text c="dimmed" size="sm" mt={4}>{item.date}</Text>
                <Text size="md" mt={4}>{item.description}</Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Container>
      </Box>
    </>
  );
}