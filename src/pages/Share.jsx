// src/pages/Share.jsx
import { 
  Container, 
  Title, 
  Text, 
  Stack, 
  Box, 
  useMantineTheme, 
  Image, 
  Center,
  Code
} from '@mantine/core';
import { IconQrcode } from '@tabler/icons-react';

import CULSJA_Logo from '../img/CULSJA_logo.png'; 
import QRCodeImage from '../img/QRCode.png'; 

export default function Share() {
  const theme = useMantineTheme();
  const primaryColor = theme.colors.primary[7];
  
  const siteUrl = "https://lavaughb.github.io/Wayne-s-Business/"; 
  
  return (
    <Box bg="gray.0" py={80} style={{ minHeight: '80vh' }}>
      <Container size="sm">
        <Stack align="center" gap="xl" ta="center">
          
          {/* Logo */}
          <Image
              src={CULSJA_Logo}
              alt="CULSJA Commercial Logo"
              h={120}
              w={120} 
              fit="contain"
          />

          <Title order={1} c={primaryColor}>Share CULSJA Commercial</Title>
          <Text size="lg" maw={500} c="dark.7">
            Instantly share our full capabilities, contact information, and service portfolio with clients and partners by scanning the code below.
          </Text>
          
          <Box 
            p="xl" 
            bg="white" 
            shadow="xl" 
            radius="md" 
            style={{ border: `3px solid ${primaryColor}` }}
          >
            {/* MODIFIED: Adjusted image styling to ensure full QR code visibility */}
            <Image 
                src={QRCodeImage} 
                alt="QR Code link to CULSJA Commercial website"
                maw={250} // Set max-width to maintain size, but allow flexibility
                mx="auto" // Center the image if it's smaller than maw
                style={{ 
                    // Ensures the entire image fits within its boundaries
                    objectFit: 'contain', 
                    // Maintain aspect ratio, but also set explicit height if needed
                    height: 'auto', 
                    display: 'block' // Remove extra space often found below images
                }}
            />
          </Box>
          
          <Text size="sm" c="dimmed">
            This code links directly to: <Code>{siteUrl}</Code>
          </Text>

        </Stack>
      </Container>
    </Box>
  );
}