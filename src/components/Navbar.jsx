// src/components/Navbar.jsx
import { 
  Box, 
  Group, 
  Button, 
  Title, 
  Burger, 
  Drawer, 
  Stack, 
  Divider,
  useMantineTheme,
  Image // <-- ADDED: Import Image component
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useLocation } from 'react-router-dom';
import { IconQrcode } from '@tabler/icons-react'; 

// MODIFIED: Using the requested import path
import CULSJA_Logo from '../img/CULSJA_logo.png'; 

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false); 
  const location = useLocation(); 
  const theme = useMantineTheme(); 

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { label: "Home", path: "/", isCta: false, icon: null },
    { label: "About", path: "/about", isCta: false, icon: null },
    { label: "Services", path: "/services", isCta: false, icon: null },
    // MODIFIED: Added isIconOnly flag for desktop display
    { label: "Share", path: "/share", isCta: false, icon: IconQrcode, isIconOnly: true }, 
    { label: "Contact", path: "/contact", isCta: true, icon: null },
  ];

  const renderLinks = (isMobile = false) => (
    navLinks.map((link) => {
      const active = isActive(link.path);
      
      let variant = 'subtle';
      let color = 'primary.7'; 

      if (link.isCta) {
        variant = active ? 'filled' : 'light';
        color = 'yellow'; 
      } else {
        variant = active ? 'filled' : 'subtle';
        color = active ? 'primary.6' : 'dark.7';
      }
      
      const content = (isMobile || !link.isIconOnly) ? link.label : <link.icon size={20} />;
      const styleProps = (link.isIconOnly && !isMobile) ? { px: 'sm' } : {}; // Make icon button smaller
      
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
          {...styleProps} // Apply styleProps for desktop icon buttons
        >
          {content}
        </Button>
      );
    })
  );

  return (
    <Box 
      w="100%" 
      bg={theme.colors.primary[0]} 
      px="xl" 
      py="sm"
      style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
      }}
    >
      {/* 1. Logo/Business Name (MODIFIED: Logo size increased) */}
      <Button 
        component={Link} 
        to="/"          
        variant="subtle" 
        c="primary.7" 
        p={0}            
        style={{ height: 'auto' }} 
        onClick={close} 
      >
        <Group gap="sm" wrap="nowrap"> {/* Group the Image and Title */}
            <Image
                src={CULSJA_Logo} // Use the imported logo image
                alt="CULSJA Commercial Logo"
                h={80} // <-- INCREASED: 200% larger than the previous 40px
                w="auto" 
                fit="contain"
            />
            <Title order={3}>
              CULSJA Commercial
            </Title>
        </Group>
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
        title={<Title order={4} component="span" c="primary.7">CULSJA Navigation</Title>} 
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