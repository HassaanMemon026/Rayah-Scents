'use client';
import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Logo from '../../public/rayah-scents-logo.png';

// Animated gradient background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled(Box)({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(270deg, #1a1a1a, #2b0a0a, #3c1f1f, #1a1a1a)',
    backgroundSize: '600% 600%',
    animation: `${gradientAnimation} 20s ease infinite`,
    color: '#d4af37', // gold
    textAlign: 'center',
    overflow: 'hidden',
    padding: '0 1rem',

    '@media (max-width:600px)': {
        padding: '0 0.5rem',
    },
});

const LogoImage = styled('img')({
    width: '250px',
    height: 'auto',
    borderRadius: '50%',
    marginBottom: '2rem',
    objectFit: 'contain',
    animation: 'pulse 2s infinite alternate',

    '@media (max-width:600px)': {
        width: '180px', // Mobile پر بڑا لوگو
        marginBottom: '1.5rem',
    },

    '@keyframes pulse': {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.05)' },
    },
});

const Text = styled(Typography)({
    letterSpacing: '2px',
    fontWeight: 400,
    margin: '0.5rem 0',

    '@media (max-width:600px)': {
        fontSize: '1rem', // Mobile کے لیے تھوڑا بڑا
    },
});

const SocialLink = styled('a')({
    color: '#d4af37',
    textDecoration: 'none',
    marginRight: '0.5rem',
    transition: 'all 0.3s ease',

    '&:hover': {
        textDecoration: 'underline',
        transform: 'scale(1.05)',
    },

    '@media (max-width:600px)': {
        marginRight: '0.3rem',
        fontSize: '0.9rem', // Mobile کے لیے تھوڑا بڑا
    },
});

export default function ComingSoon() {
    return (
        <Container>
            <LogoImage src={Logo.src} alt="Rayah Scents Logo" />
            <Text variant="h3" sx={{ '@media (max-width:600px)': { fontSize: '2rem' } }}>
                COMING SOON
            </Text>
            <Text variant="h5" sx={{ '@media (max-width:600px)': { fontSize: '1.4rem' } }}>
                January 2026
            </Text>
            <Box mt={4}>
                <Text variant="body1">
                    <SocialLink href="https://instagram.com/rayahscents" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </SocialLink>
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    <SocialLink href="https://www.facebook.com/share/1JuFbuoJrZ" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </SocialLink>
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    <SocialLink href="https://tiktok.com/@rayah.scents" target="_blank" rel="noopener noreferrer">
                        TikTok
                    </SocialLink>
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    <SocialLink href="https://whatsapp.com/channel/0029VbC7brXGk1FxWR8xG42q" target="_blank" rel="noopener noreferrer">
                        WhatsApp Channel
                    </SocialLink>
                    <span style={{ margin: '0 0.5rem' }}>|</span>
                    <SocialLink href="https://wa.me/+923343166003" target="_blank" rel="noopener noreferrer">
                        Contact WhatsApp
                    </SocialLink>
                </Text>
            </Box>
        </Container>
    );
}
