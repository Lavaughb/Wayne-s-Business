// src/components/Navbar.jsx (HTML Nesting Fix Applied)
import { 
  Box, 
  Group, 
  Button, 
  Title, 
  Burger, 
  Drawer, 
  Stack, 
  Divider 
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false); 
  const location = useLocation(); 

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { label: "Home", path: "/", isCta: false },
    { label: "About", path: "/about", isCta: false },
    { label: "Services", path: "/services", isCta: false },
    { label: "Contact", path: "/contact", isCta: true },
  ];

  const renderLinks = (isMobile = false) => (
    navLinks.map((link) => {
      const active = isActive(link.path);
      
      let variant = 'subtle';
      let color = 'dark.7';

      if (link.isCta) {
        // Contact button styling
        variant = active ? 'filled' : 'light';
        color = 'yellow.5'; 
      } else {
        // Standard page highlighting
        variant = active ? 'filled' : 'subtle';
        color = active ? 'primary.6' : 'dark.7';
      }
      
      return (
        <Button 
          key={link.path}
          component={Link} 
          to={link.path} 
          variant={variant} 
          color={color} 
          fullWidth={isMobile}
          onClick={close} 
          size={isMobile ? "lg" : "md"}
        >
          {link.label}
        </Button>
      );
    })
  );

  return (
    <Box 
      w="100%" 
      h="100%" 
      bg="gray.0" 
      px="xl" 
      py="sm"
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      }}
    >
      {/* 1. Logo */}
      <Button 
        component={Link} 
        to="/"          
        variant="subtle" 
        c="primary.6"    
        p={0}            
        style={{ height: 'auto' }} 
        onClick={close} 
      >
        <Title order={3}>
          Wayne’s Family Business
        </Title>
      </Button>
      
      {/* 2. Desktop Navigation */}
      <Group gap="md" visibleFrom="md">
        {renderLinks(false)}
      </Group>

      {/* 3. Mobile Hamburger Menu (Burger Icon + Drawer) */}
      <Group hiddenFrom="md">
        <Burger opened={opened} onClick={toggle} size="sm" />
      </Group>

      <Drawer
        opened={opened}
        onClose={close}
        // 🚨 FIX: Force Title to render as a span using component="span"
        // This avoids the illegal <h2><h4> nesting while preserving the style.
        title={<Title order={4} component="span" c="primary.7">Navigation</Title>} 
        padding="md"
        size="xs" 
      >
        <Stack gap="sm">
          <Divider />
          {renderLinks(true)}
        </Stack>
      </Drawer>
    </Box>
  );
}