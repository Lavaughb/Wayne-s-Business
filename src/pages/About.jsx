import { 
  Stack, 
  Title, 
  Text, 
  Container, 
  Timeline, 
  Box, 
  useMantineTheme,
  Card,
  SimpleGrid,
  Avatar,
  Badge,
  Group 
} from '@mantine/core';
import { 
  IconHomeCheck, 
  IconBuildingCottage, 
  IconUsers, 
  IconHammer, 
  IconTrophy 
} from '@tabler/icons-react';

// Sample data for the timeline
const timelineData = [
  { 
    title: 'Founded by Wayne Sr.', 
    date: '1998', 
    description: 'Wayne Sr. started the business with a single truck and a commitment to honest, quality work for neighbors.', 
    icon: IconBuildingCottage 
  },
  { 
    title: 'Expanded Service Area', 
    date: '2005', 
    description: 'The business grew through word-of-mouth, allowing us to hire our first employees and expand our service coverage.', 
    icon: IconUsers 
  },
  { 
    title: 'Wayne Jr. Joins the Team', 
    date: '2015', 
    description: 'Wayne Jr. brought new skills and a fresh vision, incorporating modern techniques while maintaining family values.', 
    icon: IconHammer 
  },
  { 
    title: 'Recognized for Excellence', 
    date: 'Present', 
    description: 'Today, we continue the legacy of service, focusing on reliable repairs and building lasting customer relationships.', 
    icon: IconTrophy 
  },
];

// Sample data for team members
const teamData = [
    { name: 'Wayne Sr.', role: 'Founder & Senior Technician', bio: 'The man who started it all. Years of experience and an unwavering commitment to quality.', avatar: null },
    { name: 'Wayne Jr.', role: 'Lead Technician & Operations', bio: 'Specializing in small renovations and ensuring every job meets our high standard of excellence.', avatar: null },
    { name: 'Sarah M.', role: 'Office Manager & Scheduling', bio: 'The friendly voice who handles all scheduling and ensures transparent communication.', avatar: null },
];

export default function About() {
  const theme = useMantineTheme();
  
  return (
    <> 
      {/* 1. Hero / Mission Section (Light Gray Background) */}
      <Box bg="gray.0" py={80}>
        <Container size="md">
          <Stack align="center" gap="xl" ta="center">
            <Title order={1} c="primary.7">Our Family Story & Mission</Title>
            <Text size="lg" maw={700} c="dark.7">
              **Wayne's Family Business** is built on the foundation of **trust, quality, and community**. For over two decades, our family has dedicated itself to providing homeowners with dependable, high-quality maintenance and renovation services. We believe in treating your home with the same care we give our own.
            </Text>
            <Badge size="lg" color="yellow.5" variant="light" leftSection={<IconHomeCheck size={16} />}>
                Built on Trust Since 1998
            </Badge>
          </Stack>
        </Container>
      </Box>

      {/* 2. Company Timeline (Alternating Background for Visual Break) */}
      <Box bg="gray.1" py={100}>
        <Container size="lg">
          <Title order={2} ta="center" mb={60} c="primary.7">Our History and Milestones</Title>
          <Timeline 
            active={timelineData.length - 1} // Makes the current step the final one
            bulletSize={30} 
            lineWidth={2}
          >
            {timelineData.map((item, index) => (
              <Timeline.Item
                key={index}
                title={<Title order={4} c="primary.6">{item.title}</Title>}
                bullet={<item.icon size={16} />}
                lineVariant={index === timelineData.length - 1 ? 'solid' : 'dashed'} // Last line is solid
              >
                <Text c="dimmed" size="sm" mt={4}>{item.date}</Text>
                <Text size="md" mt={4}>{item.description}</Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </Container>
      </Box>

      {/* 3. Meet the Team Section (Return to Light Gray Background) */}
      <Box bg="gray.0" py={100}>
        <Container size="xl">
          <Title order={2} ta="center" mb={60} c="primary.7">Meet the Family Behind the Business</Title>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
            {teamData.map((member) => (
                <Card 
                    key={member.name} 
                    shadow="sm" 
                    padding="xl" 
                    radius="md" 
                    withBorder
                    ta="center"
                >
                    <Stack align="center">
                        {/* Placeholder for real team images */}
                        <Avatar size={100} radius="xl" color="yellow.6" src={member.avatar}>
                            {member.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Title order={3} c="dark.7">{member.name}</Title>
                        <Badge size="lg" color="primary.5">{member.role}</Badge>
                        <Text size="sm" c="dimmed">{member.bio}</Text>
                    </Stack>
                </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}