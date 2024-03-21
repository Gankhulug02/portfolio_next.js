import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        width: '100wh',
        height: '50px',
        backgroundColor: '#f5f5f5',
        borderTop: '2px solid #e1e1e1',
        paddingX: { xs: '5%', lg: '8%' },
      }}
    >
      <Link href="https://www.instagram.com/etoyaa02/" target="_blank">
        <Typography sx={{ color: 'grey' }}>Instagram</Typography>
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=100014038351651"
        target="_blank"
      >
        <Typography sx={{ color: 'grey' }}>Facebook</Typography>
      </Link>
      <Link href="https://github.com/Gankhulug02" target="_blank">
        <Typography sx={{ color: 'grey' }}>Github</Typography>
      </Link>
    </Box>
  );
};

export default Footer;
